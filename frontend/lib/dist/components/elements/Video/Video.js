/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useMemo, useRef } from "react";
import { Video as VideoProto } from "../../../proto";
import { IS_DEV_ENV } from "../../../baseconsts";
import { jsx as _jsx } from "react/jsx-runtime";
const DEFAULT_HEIGHT = 528;
export default function Video(_ref) {
  let {
    element,
    width,
    endpoints,
    elementMgr
  } = _ref;
  const videoRef = useRef(null);

  /* Element may contain "url" or "data" property. */
  const {
    type,
    url,
    startTime,
    subtitles,
    endTime,
    loop,
    autoplay,
    muted
  } = element;
  const preventAutoplay = useMemo(() => {
    if (!element.id) {
      // Elements without an ID should never autoplay
      return true;
    }

    // Recover the state in case this component got unmounted
    // and mounted again for the same element.
    const preventAutoplay = elementMgr.getElementState(element.id, "preventAutoplay");
    if (!preventAutoplay) {
      // Set the state to prevent autoplay in case there is an unmount + mount
      // for the same element.
      elementMgr.setElementState(element.id, "preventAutoplay", true);
    }
    return preventAutoplay !== null && preventAutoplay !== void 0 ? preventAutoplay : false;
  }, [element.id, elementMgr]);

  // Handle startTime changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  }, [startTime]);
  useEffect(() => {
    const videoNode = videoRef.current;
    const setStartTime = () => {
      if (videoNode) {
        videoNode.currentTime = element.startTime;
      }
    };
    if (videoNode) {
      videoNode.addEventListener("loadedmetadata", setStartTime);
    }
    return () => {
      if (videoNode) {
        videoNode.removeEventListener("loadedmetadata", setStartTime);
      }
    };
  }, [element]);

  // Stop the video at 'endTime' and handle loop
  useEffect(() => {
    const videoNode = videoRef.current;
    if (!videoNode) return;

    // Flag to avoid calling 'videoNode.pause()' multiple times
    let stoppedByEndTime = false;
    const handleTimeUpdate = () => {
      if (endTime > 0 && videoNode.currentTime >= endTime) {
        if (loop) {
          // If loop is true and we reached 'endTime', reset to 'startTime'
          videoNode.currentTime = startTime || 0;
          videoNode.play();
        } else if (!stoppedByEndTime) {
          stoppedByEndTime = true;
          videoNode.pause();
        }
      }
    };
    if (endTime > 0) {
      videoNode.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (videoNode && endTime > 0) {
        videoNode.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [endTime, loop, startTime]);

  // Handle looping the video
  useEffect(() => {
    const videoNode = videoRef.current;
    if (!videoNode) return;

    // Loop the video when it has ended
    const handleVideoEnd = () => {
      if (loop) {
        videoNode.currentTime = startTime || 0; // Reset to startTime or to the start if not specified
        videoNode.play();
      }
    };
    videoNode.addEventListener("ended", handleVideoEnd);
    return () => {
      if (videoNode) {
        videoNode.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [loop, startTime]);
  const getYoutubeSrc = url => {
    const {
      startTime,
      endTime,
      loop,
      autoplay,
      muted
    } = element;
    const youtubeUrl = new URL(url);
    if (startTime && !isNaN(startTime)) {
      youtubeUrl.searchParams.append("start", startTime.toString());
    }
    if (endTime && !isNaN(endTime)) {
      youtubeUrl.searchParams.append("end", endTime.toString());
    }
    if (loop) {
      youtubeUrl.searchParams.append("loop", "1");
      // When using the loop parameter, YouTube requires the playlist parameter to be set to the same video ID
      const videoId = youtubeUrl.pathname.split("/").pop();
      if (videoId) {
        youtubeUrl.searchParams.append("playlist", videoId);
      }
    }
    if (autoplay) {
      youtubeUrl.searchParams.append("autoplay", "1");
    }
    if (muted) {
      youtubeUrl.searchParams.append("mute", "1");
    }
    return youtubeUrl.toString();
  };

  /* Is this a YouTube link? If so we need a fancier tag.
       NOTE: This part assumes the URL is already an "embed" link.
    */
  if (type === VideoProto.Type.YOUTUBE_IFRAME) {
    // At some point the width 0 will be passed to this component
    // which is caused by the AutoSizer of the VerticalLayout
    // Width 0 will result in height being 0, which results in issue
    // https://github.com/streamlit/streamlit/issues/5069
    // To avoid this, when we detect width is 0, we set height to 528,
    // which is default height based on the default streamlit width
    const height = width !== 0 ? width * 0.75 : DEFAULT_HEIGHT;
    return /*#__PURE__*/_jsx("iframe", {
      "data-testid": "stVideo",
      title: url,
      src: getYoutubeSrc(url),
      width: width,
      height: height,
      style: {
        colorScheme: "normal"
      },
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true
    });
  }

  // Only in dev mode we set crossOrigin to "anonymous" to avoid CORS issues
  // when streamlit frontend and backend are running on different ports
  return /*#__PURE__*/_jsx("video", {
    "data-testid": "stVideo",
    ref: videoRef,
    controls: true,
    muted: muted,
    autoPlay: autoplay && !preventAutoplay,
    src: endpoints.buildMediaURL(url),
    className: "stVideo",
    style: {
      width,
      height: width === 0 ? DEFAULT_HEIGHT : undefined
    },
    crossOrigin: IS_DEV_ENV && subtitles.length > 0 ? "anonymous" : undefined,
    children: subtitles && subtitles.map((subtitle, idx) => /*#__PURE__*/_jsx("track", {
      kind: "captions",
      src: endpoints.buildMediaURL(subtitle.url),
      label: subtitle.label,
      default: idx === 0
    }, idx))
  });
}
//# sourceMappingURL=Video.js.map