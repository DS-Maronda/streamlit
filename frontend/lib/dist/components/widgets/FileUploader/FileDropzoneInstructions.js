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

import React from "react";
import { CloudUpload } from "@emotion-icons/material-outlined";
import Icon from "../../shared/Icon";
import { FileSize, getSizeDisplay } from "../../../util/FileHelper";
import { Small } from "../../shared/TextElements";
import { StyledFileDropzoneInstructions, StyledFileDropzoneInstructionsColumn, StyledFileDropzoneInstructionsFileUploaderIcon, StyledFileDropzoneInstructionsStyledSpan } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const FileDropzoneInstructions = _ref => {
  let {
    multiple,
    acceptedExtensions,
    maxSizeBytes
  } = _ref;
  return /*#__PURE__*/_jsxs(StyledFileDropzoneInstructions, {
    "data-testid": "stFileUploaderDropzoneInstructions",
    children: [/*#__PURE__*/_jsx(StyledFileDropzoneInstructionsFileUploaderIcon, {
      children: /*#__PURE__*/_jsx(Icon, {
        content: CloudUpload,
        size: "threeXL"
      })
    }), /*#__PURE__*/_jsxs(StyledFileDropzoneInstructionsColumn, {
      children: [/*#__PURE__*/_jsxs(StyledFileDropzoneInstructionsStyledSpan, {
        children: ["Drag and drop file", multiple ? "s" : "", " here"]
      }), /*#__PURE__*/_jsxs(Small, {
        children: ["Limit ".concat(getSizeDisplay(maxSizeBytes, FileSize.Byte, 0), " per file"), acceptedExtensions.length ? " \u2022 ".concat(acceptedExtensions.map(ext => ext.replace(/^\./, "").toUpperCase()).join(", ")) : null]
      })]
    })]
  });
};
export default FileDropzoneInstructions;
//# sourceMappingURL=FileDropzoneInstructions.js.map