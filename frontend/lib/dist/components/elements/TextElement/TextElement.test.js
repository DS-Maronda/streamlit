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
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test_util";
import { Text as TextProto } from "../../../proto";
import TextElement from "./TextElement";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: TextProto.create({
      body: "some plain text",
      ...elementProps
    }),
    width: 100
  };
};
describe("TextElement element", () => {
  it("renders preformatted text as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(TextElement, {
      ...props
    }));
    expect(screen.getByText("some plain text")).toBeInTheDocument();
  });
  it("renders text with help tooltip", async () => {
    const props = getProps({
      help: "help text"
    });
    render( /*#__PURE__*/_jsx(TextElement, {
      ...props
    }));
    const tooltip = screen.getByTestId("stTooltipHoverTarget");
    expect(tooltip).toBeInTheDocument();
    fireEvent.mouseOver(tooltip);
    const helpText = await screen.findAllByText("help text");
    expect(helpText[0].textContent).toBe("help text");
  });
});
//# sourceMappingURL=TextElement.test.js.map