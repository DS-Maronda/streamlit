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

import get from "lodash/get";
import xxhash from "xxhashjs";
import decamelize from "decamelize";
import { Alert as AlertProto, Element, LabelVisibilityMessage as LabelVisibilityMessageProto, Skeleton as SkeletonProto } from "../proto";

/**
 * Wraps a function to allow it to be called, at most, once per interval
 * (specified in milliseconds). If the wrapper function is called N times
 * within that interval, only the Nth call will go through. The function
 * will only be called after the full interval has elapsed since the last
 * call.
 */
export function debounce(delay, fn) {
  let timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

/**
 * Embed query param values, which can be set in ?embed={value}, all should be lowercase
 */
export const EMBED_QUERY_PARAM_KEY = "embed";
export const EMBED_OPTIONS_QUERY_PARAM_KEY = "embed_options";
export const EMBED_SHOW_COLORED_LINE = "show_colored_line";
export const EMBED_SHOW_TOOLBAR = "show_toolbar";
export const EMBED_SHOW_PADDING = "show_padding";
export const EMBED_DISABLE_SCROLLING = "disable_scrolling";
export const EMBED_LIGHT_THEME = "light_theme";
export const EMBED_DARK_THEME = "dark_theme";
export const EMBED_TRUE = "true";
export const EMBED_HIDE_LOADING_SCREEN = "hide_loading_screen";
export const EMBED_SHOW_LOADING_SCREEN_V1 = "show_loading_screen_v1";
export const EMBED_SHOW_LOADING_SCREEN_V2 = "show_loading_screen_v2";
export const EMBED_QUERY_PARAM_VALUES = [EMBED_SHOW_COLORED_LINE, EMBED_SHOW_TOOLBAR, EMBED_SHOW_PADDING, EMBED_DISABLE_SCROLLING, EMBED_LIGHT_THEME, EMBED_DARK_THEME, EMBED_HIDE_LOADING_SCREEN, EMBED_SHOW_LOADING_SCREEN_V1, EMBED_SHOW_LOADING_SCREEN_V2, EMBED_TRUE];
export let LoadingScreenType;

/**
 * Returns list of defined in EMBED_QUERY_PARAM_VALUES url params of given key
 * (EMBED_QUERY_PARAM_KEY, EMBED_OPTIONS_QUERY_PARAM_KEY). Is case insensitive.
 */
(function (LoadingScreenType) {
  LoadingScreenType[LoadingScreenType["NONE"] = 0] = "NONE";
  LoadingScreenType[LoadingScreenType["V1"] = 1] = "V1";
  LoadingScreenType[LoadingScreenType["V2"] = 2] = "V2";
})(LoadingScreenType || (LoadingScreenType = {}));
export function getEmbedUrlParams(embedKey) {
  const embedUrlParams = new Set();
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.forEach((paramValue, paramKey) => {
    paramKey = paramKey.toString().toLowerCase();
    paramValue = paramValue.toString().toLowerCase();
    if (paramKey === embedKey && EMBED_QUERY_PARAM_VALUES.includes(paramValue)) {
      embedUrlParams.add(paramValue);
    }
  });
  return embedUrlParams;
}

/**
 * Returns "embed" and "embed_options" query param options in the url. Returns empty string if not embedded.
 * Example:
 *  returns "embed=true&embed_options=show_loading_screen_v2" if the url is
 *  http://localhost:3000/test?embed=true&embed_options=show_loading_screen_v2
 */
export function preserveEmbedQueryParams() {
  if (!isEmbed()) {
    return "";
  }
  const embedOptionsValues = new URLSearchParams(window.location.search).getAll(EMBED_OPTIONS_QUERY_PARAM_KEY);

  // instantiate multiple key values with an array of string pairs
  // https://stackoverflow.com/questions/72571132/urlsearchparams-with-multiple-values
  const embedUrlMap = [];
  embedUrlMap.push([EMBED_QUERY_PARAM_KEY, EMBED_TRUE]);
  embedOptionsValues.forEach(embedValue => {
    embedUrlMap.push([EMBED_OPTIONS_QUERY_PARAM_KEY, embedValue]);
  });
  return new URLSearchParams(embedUrlMap).toString();
}

/**
 * Returns true if the URL parameters contain ?embed=true (case insensitive).
 */
export function isEmbed() {
  return getEmbedUrlParams(EMBED_QUERY_PARAM_KEY).has(EMBED_TRUE);
}

/**
 * Returns true if the URL parameters contain ?embed=true&embed_options=show_colored_line (case insensitive).
 */
export function isColoredLineDisplayed() {
  return isEmbed() && getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_SHOW_COLORED_LINE);
}

/**
 * Returns true if the URL parameters contain ?embed=true&embed_options=show_toolbar (case insensitive).
 */
export function isToolbarDisplayed() {
  return isEmbed() && getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_SHOW_TOOLBAR);
}

/**
 * Returns true if the URL parameters contain ?embed=true&embed_options=disable_scrolling (case insensitive).
 */
export function isScrollingHidden() {
  return isEmbed() && getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_DISABLE_SCROLLING);
}

/**
 * Returns true if the URL parameters contain ?embed=true&embed_options=show_padding (case insensitive).
 */
export function isPaddingDisplayed() {
  return isEmbed() && getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_SHOW_PADDING);
}

/**
 * Returns true if the URL parameters contain ?embed_options=light_theme (case insensitive).
 */
export function isLightThemeInQueryParams() {
  // NOTE: We don't check for ?embed=true here, because we want to allow display without any
  // other embed options (for example in our e2e tests).
  return getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_LIGHT_THEME);
}

/**
 * Returns true if the URL parameters contain ?embed_options=dark_theme (case insensitive).
 */
export function isDarkThemeInQueryParams() {
  // NOTE: We don't check for ?embed=true here, because we want to allow display without any
  // other embed options (for example in our e2e tests).
  return getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY).has(EMBED_DARK_THEME);
}

/**
 * Returns true if the parent parameter indicates that we're in an iframe.
 */
export function isInChildFrame() {
  return window.parent !== window;
}

/**
 * Returns a string with the type of loading screen to use while the app is
 * waiting for the backend to send displayable protos.
 */
export function getLoadingScreenType() {
  const params = getEmbedUrlParams(EMBED_OPTIONS_QUERY_PARAM_KEY);
  return params.has(EMBED_HIDE_LOADING_SCREEN) ? LoadingScreenType.NONE : params.has(EMBED_SHOW_LOADING_SCREEN_V1) ? LoadingScreenType.V1 : LoadingScreenType.V2;
}

/** Return an info Element protobuf with the given text. */
export function makeElementWithInfoText(text) {
  return new Element({
    alert: {
      body: text,
      format: AlertProto.Format.INFO
    }
  });
}

/** Return an error Element protobuf with the given text. */
export function makeElementWithErrorText(text) {
  return new Element({
    alert: {
      body: text,
      format: AlertProto.Format.ERROR
    }
  });
}

/** Return a special internal-only Element showing an app "skeleton". */
export function makeAppSkeletonElement() {
  return new Element({
    skeleton: {
      style: SkeletonProto.SkeletonStyle.APP
    }
  });
}

/**
 * A helper function to hash a string using xxHash32 algorithm.
 * Seed used: 0xDEADBEEF
 */
export function hashString(s) {
  return xxhash.h32(s, 0xdeadbeef).toString(16);
}

/**
 * Coerces a possibly-null value into a non-null value, throwing an error
 * if the value is null or undefined.
 */
export function requireNonNull(obj) {
  if (isNullOrUndefined(obj)) {
    throw new Error("value is null");
  }
  return obj;
}

/**
 * A type predicate that is true if the given value is not undefined.
 */
export function notUndefined(value) {
  return value !== undefined;
}

/**
 * A type predicate that is true if the given value is not null.
 */
export function notNull(value) {
  return notNullOrUndefined(value);
}

/**
 * A type predicate that is true if the given value is neither undefined
 * nor null.
 */
export function notNullOrUndefined(value) {
  return value !== null && value !== undefined;
}

/**
 * A type predicate that is true if the given value is either undefined
 * or null.
 */
export function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

/**
 * A promise that would be resolved after certain time
 * @param ms number
 */
export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Tests if the app is running from a Mac
 */
export function isFromMac() {
  return /Mac/i.test(navigator.platform);
}

/**
 * Tests if the app is running from a Windows
 */
export function isFromWindows() {
  return /^Win/i.test(navigator.platform);
}

/**
 * Returns cookie value
 */
export function getCookie(name) {
  const r = document.cookie.match("\\b".concat(name, "=([^;]*)\\b"));
  return r ? r[1] : undefined;
}

/**
 * Sets cookie value
 */
export function setCookie(name, value, expiration) {
  const expirationDate = value ? expiration : new Date();
  const expirationStr = expirationDate ? "expires=".concat(expirationDate.toUTCString(), ";") : "";
  document.cookie = "".concat(name, "=").concat(value, ";").concat(expirationStr, "path=/");
}

/** Return an Element's widget ID if it's a widget, and undefined otherwise. */
export function getElementWidgetID(element) {
  // NOTE: This is a temporary fix until the selections in maps work is done.
  // We believe that this will be easier to fix when we get to that point so in
  // the meantime we will be doing this simple fix to prevent this error: https://github.com/streamlit/streamlit/issues/8329
  if (notNull(element.deckGlJsonChart)) {
    return undefined;
  }
  return get(element, [requireNonNull(element.type), "id"]);
}

/** True if the given form ID is non-null and non-empty. */
export function isValidFormId(formId) {
  return notNullOrUndefined(formId) && formId.length > 0;
}

/** True if the given widget element is part of a form. */
export function isInForm(widget) {
  return isValidFormId(widget.formId);
}
export let LabelVisibilityOptions;
(function (LabelVisibilityOptions) {
  LabelVisibilityOptions[LabelVisibilityOptions["Visible"] = 0] = "Visible";
  LabelVisibilityOptions[LabelVisibilityOptions["Hidden"] = 1] = "Hidden";
  LabelVisibilityOptions[LabelVisibilityOptions["Collapsed"] = 2] = "Collapsed";
})(LabelVisibilityOptions || (LabelVisibilityOptions = {}));
export function labelVisibilityProtoValueToEnum(value) {
  switch (value) {
    case LabelVisibilityMessageProto.LabelVisibilityOptions.VISIBLE:
      return LabelVisibilityOptions.Visible;
    case LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN:
      return LabelVisibilityOptions.Hidden;
    case LabelVisibilityMessageProto.LabelVisibilityOptions.COLLAPSED:
      return LabelVisibilityOptions.Collapsed;
    default:
      return LabelVisibilityOptions.Visible;
  }
}

/**
 * Looks for an IFrame with given className inside given querySet
 */
export function findAnIFrameWithClassName(qs, className) {
  for (let i = 0; i < qs.length; i++) {
    const cd = qs[i].contentDocument;
    if (cd && cd.getElementsByClassName(className).length > 0) {
      return qs[i];
    }
  }
  return null;
}

/**
 * Returns True if IFrame can be accessed otherwise returns False
 */
export function canAccessIFrame(iframe) {
  try {
    if (iframe.contentWindow === null) return false;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const html = doc.body.innerHTML;
    return html !== null && html !== "";
  } catch (err) {
    return false;
  }
}

/**
 * Tries to get an IFrame in which Streamlit app is embedded on Cloud deployments.
 * It assumes iframe has title="streamlitApp", iterates over IFrames,
 * and looks which IFrame contains div with stAppId value, otherwise returns first found iFrame or null.
 */
export function getIFrameEnclosingApp(embeddingId) {
  if (!isInChildFrame()) {
    return null;
  }
  const embeddingIdClassName = getEmbeddingIdClassName(embeddingId);
  const qsStreamlitAppStr = 'iframe[title="streamlitApp"]';
  let qs = window.document.querySelectorAll(qsStreamlitAppStr);
  let foundIFrame = findAnIFrameWithClassName(qs, embeddingIdClassName);
  if (foundIFrame && !canAccessIFrame(foundIFrame)) {
    return null;
  }
  if (foundIFrame) {
    return foundIFrame;
  }
  if (window.parent) {
    qs = window.parent.document.querySelectorAll(qsStreamlitAppStr);
  }
  foundIFrame = findAnIFrameWithClassName(qs, embeddingIdClassName);
  if (foundIFrame && !canAccessIFrame(foundIFrame)) {
    return null;
  }
  if (foundIFrame) {
    return foundIFrame;
  }
  let htmlCollection = window.document.getElementsByTagName("iframe");
  foundIFrame = findAnIFrameWithClassName(htmlCollection, embeddingIdClassName);
  if (foundIFrame && !canAccessIFrame(foundIFrame)) {
    return null;
  }
  if (foundIFrame) {
    return foundIFrame;
  }
  if (window.parent) {
    htmlCollection = window.parent.document.getElementsByTagName("iframe");
  }
  foundIFrame = findAnIFrameWithClassName(htmlCollection, embeddingIdClassName);
  if (foundIFrame && !canAccessIFrame(foundIFrame)) {
    return null;
  }
  return foundIFrame;
}

/**
 * Returns UID generated based on current date and Math.random module
 */
export function generateUID() {
  return Math.floor(Date.now() / 1000).toString(36) + Math.random().toString(36).slice(-6);
}

/**
 * Returns stAppEmbeddingId-${this.embeddingId} string,
 * which is used as class to detect iFrame when printing
 */
export function getEmbeddingIdClassName(embeddingId) {
  return "stAppEmbeddingId-".concat(embeddingId);
}
export function extractPageNameFromPathName(pathname, basePath) {
  // We'd prefer to write something like
  //
  // ```
  // replace(
  //   new RegExp(`^/${basePath}/?`),
  //   ""
  // )
  // ```
  //
  // below, but that doesn't work because basePath may contain unescaped
  // regex special-characters. This is why we're stuck with the
  // weird-looking triple `replace()`.
  return decodeURIComponent(document.location.pathname.replace("/".concat(basePath), "").replace(new RegExp("^/?"), "").replace(new RegExp("/$"), ""));
}

/**
 * Converts object keys from camelCase to snake_case, applied recursively to nested objects and arrays.
 * Keys containing dots are replaced with underscores. The conversion preserves consecutive uppercase letters.
 *
 * @param obj - The input object with keys to be converted. Can include nested objects and arrays.
 * @returns A new object with all keys in snake_case, maintaining the original structure and values.
 *
 * @example
 * keysToSnakeCase({
 *   userId: 1,
 *   user.Info: { firstName: "John", lastName: "Doe" },
 *   userActivities: [{ loginTime: "10AM", logoutTime: "5PM" }]
 * });
 * // Returns:
 * // {
 * //   user_id: 1,
 * //   user_info: { first_name: "John", last_name: "Doe" },
 * //   user_activities: [{ login_time: "10AM", logout_time: "5PM" }]
 * // }
 */
export function keysToSnakeCase(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = decamelize(key, {
      preserveConsecutiveUppercase: true
    }).replace(".", "_");
    let value = obj[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      value = keysToSnakeCase(value);
    }
    if (Array.isArray(value)) {
      value = value.map(item => typeof item === "object" ? keysToSnakeCase(item) : item);
    }
    acc[newKey] = value;
    return acc;
  }, {});
}
//# sourceMappingURL=utils.js.map