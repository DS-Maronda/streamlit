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
import { WidgetStateManager } from "../../../WidgetStateManager";
import { Selectbox as SelectboxProto } from "../../../proto";
import { mockTheme } from "../../../mocks/mockTheme";
import { Selectbox } from "./Selectbox";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let widgetProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: SelectboxProto.create({
      id: "1",
      label: "Label",
      default: 0,
      options: ["a", "b", "c"],
      ...elementProps
    }),
    width: 0,
    disabled: false,
    theme: mockTheme.emotion,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    ...widgetProps
  };
};
const pickOption = (selectbox, value) => {
  fireEvent.click(selectbox);
  const valueElement = screen.getByText(value);
  fireEvent.click(valueElement);
};
describe("Selectbox widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Selectbox, {
      ...props
    }));
    expect(screen.getByTestId("stSelectbox")).toBeInTheDocument();
  });
  it("sets widget value on mount", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setIntValue");
    render( /*#__PURE__*/_jsx(Selectbox, {
      ...props
    }));
    expect(props.widgetMgr.setIntValue).toHaveBeenCalledWith(props.element, props.element.default, {
      fromUi: false
    }, undefined);
  });
  it("can pass fragmentId to setIntValue", () => {
    const props = getProps(undefined, {
      fragmentId: "myFragmentId"
    });
    jest.spyOn(props.widgetMgr, "setIntValue");
    render( /*#__PURE__*/_jsx(Selectbox, {
      ...props
    }));
    expect(props.widgetMgr.setIntValue).toHaveBeenCalledWith(props.element, props.element.default, {
      fromUi: false
    }, "myFragmentId");
  });
  it("handles the onChange event", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setIntValue");
    render( /*#__PURE__*/_jsx(Selectbox, {
      ...props
    }));
    const selectbox = screen.getByRole("combobox");
    pickOption(selectbox, "b");
    expect(props.widgetMgr.setIntValue).toHaveBeenLastCalledWith(props.element, 1, {
      fromUi: true
    }, undefined);
    expect(screen.queryByText("a")).not.toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
  });
  it("resets its value when form is cleared", () => {
    // Create a widget in a clearOnSubmit form
    const props = getProps({
      formId: "form"
    });
    props.widgetMgr.setFormClearOnSubmit("form", true);
    jest.spyOn(props.widgetMgr, "setIntValue");
    render( /*#__PURE__*/_jsx(Selectbox, {
      ...props
    }));
    const selectbox = screen.getByRole("combobox");
    pickOption(selectbox, "b");
    expect(props.widgetMgr.setIntValue).toHaveBeenLastCalledWith(props.element, 1, {
      fromUi: true
    }, undefined);

    // "Submit" the form
    props.widgetMgr.submitForm("form", undefined);

    // Our widget should be reset, and the widgetMgr should be updated
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.queryByText("b")).not.toBeInTheDocument();
    expect(props.widgetMgr.setIntValue).toHaveBeenLastCalledWith(props.element, props.element.default, {
      fromUi: true
    }, undefined);
  });
});
//# sourceMappingURL=Selectbox.test.js.map