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
import TimezoneMock from "timezone-mock";
import { LabelVisibilityMessage as LabelVisibilityMessageProto, Slider as SliderProto } from "../../../proto";
import { render } from "../../../test_util";
import { WidgetStateManager } from "../../../WidgetStateManager";
import { mockTheme } from "../../../mocks/mockTheme";
import Slider from "./Slider";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: SliderProto.create({
      id: "1",
      label: "Label",
      format: "%d",
      default: [5],
      min: 0,
      max: 10,
      step: 1,
      options: [],
      ...elementProps
    }),
    width: 600,
    disabled: false,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    theme: mockTheme.emotion,
    ...props
  };
};
const triggerChangeEvent = (element, key) => {
  fireEvent.focus(element);
  fireEvent.keyDown(element, {
    key
  });
  fireEvent.keyUp(element, {
    key
  });
};
describe("Slider widget", () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });
  it("shows a label", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));
    const widgetLabel = screen.queryByText("".concat(props.element.label));
    expect(widgetLabel).toBeInTheDocument();
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when hidden", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN
      }
    });
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("visibility: hidden");
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when collapsed", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.COLLAPSED
      }
    });
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
  });
  it("sets widget value on mount", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setDoubleArrayValue");
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));

    // We need to do this as we are using a debounce when the widget value is set
    jest.runAllTimers();
    expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenCalledWith(props.element, [5], {
      fromUi: false
    }, undefined);
  });
  it("can pass fragmentId to setDoubleArrayValue", () => {
    const props = getProps(undefined, {
      fragmentId: "myFragmentId"
    });
    jest.spyOn(props.widgetMgr, "setDoubleArrayValue");
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));

    // We need to do this as we are using a debounce when the widget value is set
    jest.runAllTimers();
    expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenCalledWith(props.element, [5], {
      fromUi: false
    }, "myFragmentId");
  });
  it("renders tick bar with min and max", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Slider, {
      ...props
    }));
    const min = screen.getByTestId("stTickBarMin");
    const max = screen.getByTestId("stTickBarMax");
    expect(min).toHaveTextContent("0");
    expect(max).toHaveTextContent("10");
  });
  describe("Single value", () => {
    it("renders without crashing", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const slider = screen.getByRole("slider");
      expect(slider).toBeInTheDocument();
    });
    it("displays a thumb value", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      expect(screen.getAllByTestId("stThumbValue")).toHaveLength(1);
    });
    it("has the correct value", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuetext", "".concat(props.element.default));
      expect(slider).toHaveAttribute("aria-valuemin", "".concat(props.element.min));
      expect(slider).toHaveAttribute("aria-valuemax", "".concat(props.element.max));
    });
    it("handles value changes", async () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      jest.spyOn(props.widgetMgr, "setDoubleArrayValue");
      const slider = screen.getByRole("slider");
      triggerChangeEvent(slider, "ArrowRight");
      // We need to do this as we are using a debounce when the widget value is set
      jest.runAllTimers();
      expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenCalledWith(props.element, [6], {
        fromUi: true
      }, undefined);
      expect(slider).toHaveAttribute("aria-valuenow", "6");
    });
    it("resets its value when form is cleared", async () => {
      // Create a widget in a clearOnSubmit form
      const props = getProps({
        formId: "form"
      });
      props.widgetMgr.setFormClearOnSubmit("form", true);
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      jest.spyOn(props.widgetMgr, "setDoubleArrayValue");
      const slider = screen.getByRole("slider");
      triggerChangeEvent(slider, "ArrowRight");
      jest.runAllTimers();
      expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenLastCalledWith(props.element, [6], {
        fromUi: true
      }, undefined);
      expect(slider).toHaveAttribute("aria-valuenow", "6");

      // "Submit" the form
      props.widgetMgr.submitForm("form", undefined);

      // Our widget should be reset, and the widgetMgr should be updated
      expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenLastCalledWith(props.element, props.element.default, {
        fromUi: true
      }, undefined);
      expect(slider).toHaveAttribute("aria-valuenow", "5");
    });
  });
  describe("Range value", () => {
    it("renders without crashing", () => {
      const props = getProps({
        default: [1, 9]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const sliders = screen.getAllByRole("slider");
      expect(sliders).toHaveLength(2);
    });
    it("displays 2 thumb values", () => {
      const props = getProps({
        default: [1, 9]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      expect(screen.getAllByTestId("stThumbValue")).toHaveLength(2);
    });
    it("has the correct value", () => {
      const props = getProps({
        default: [1, 9]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const sliders = screen.getAllByRole("slider");
      // First slider - max is the current value of second slider
      expect(sliders[0]).toHaveAttribute("aria-valuetext", "".concat(props.element.default[0]));
      expect(sliders[0]).toHaveAttribute("aria-valuemin", "".concat(props.element.min));
      expect(sliders[0]).toHaveAttribute("aria-valuemax", "".concat(props.element.default[1]));

      // Second slider - min is the current value of first slider
      expect(sliders[1]).toHaveAttribute("aria-valuetext", "".concat(props.element.default[1]));
      expect(sliders[1]).toHaveAttribute("aria-valuemin", "".concat(props.element.default[0]));
      expect(sliders[1]).toHaveAttribute("aria-valuemax", "".concat(props.element.max));
    });
    describe("value should be within bounds", () => {
      it("start > end", () => {
        const props = getProps({
          default: [5, 5]
        });
        render( /*#__PURE__*/_jsx(Slider, {
          ...props
        }));
        const firstSlider = screen.getAllByRole("slider")[0];
        triggerChangeEvent(firstSlider, "ArrowRight");
        expect(screen.getAllByRole("slider")[0]).toHaveAttribute("aria-valuenow", "5");
      });
      it("start < min", () => {
        const props = getProps({
          default: [0, 10]
        });
        render( /*#__PURE__*/_jsx(Slider, {
          ...props
        }));
        const firstSlider = screen.getAllByRole("slider")[0];
        triggerChangeEvent(firstSlider, "ArrowLeft");
        expect(firstSlider).toHaveAttribute("aria-valuenow", "0");
      });
      it("start > max", () => {
        const props = getProps({
          default: [10]
        });
        render( /*#__PURE__*/_jsx(Slider, {
          ...props
        }));
        const slider = screen.getByRole("slider");
        triggerChangeEvent(slider, "ArrowRight");
        expect(slider).toHaveAttribute("aria-valuenow", "10");
      });
      it("end < min", () => {
        const props = getProps({
          default: [0]
        });
        render( /*#__PURE__*/_jsx(Slider, {
          ...props
        }));
        const slider = screen.getByRole("slider");
        triggerChangeEvent(slider, "ArrowLeft");
        expect(slider).toHaveAttribute("aria-valuenow", "0");
      });
      it("end > max", () => {
        const props = getProps({
          default: [0, 10]
        });
        render( /*#__PURE__*/_jsx(Slider, {
          ...props
        }));
        const secondSlider = screen.getAllByRole("slider")[1];
        triggerChangeEvent(secondSlider, "ArrowRight");
        expect(secondSlider).toHaveAttribute("aria-valuenow", "10");
      });
    });
    it("handles value changes", async () => {
      const props = getProps({
        default: [1, 9]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      jest.spyOn(props.widgetMgr, "setDoubleArrayValue");
      const sliders = screen.getAllByRole("slider");
      triggerChangeEvent(sliders[1], "ArrowRight");

      // We need to do this as we are using a debounce when the widget value is set
      jest.runAllTimers();
      expect(props.widgetMgr.setDoubleArrayValue).toHaveBeenCalledWith(props.element, [1, 10], {
        fromUi: true
      }, undefined);
      expect(sliders[0]).toHaveAttribute("aria-valuenow", "1");
      expect(sliders[1]).toHaveAttribute("aria-valuenow", "10");
    });
  });
  describe("Datetime slider", () => {
    TimezoneMock.register("UTC");
    it("should be in UTC", () => {
      // We use a less idiomiatic Jest call, since getTimezoneOffset can return
      // -0, and Object.is(-0, 0) is false: https://stackoverflow.com/a/59343755
      expect(new Date().getTimezoneOffset() === 0).toBeTruthy();
    });
    it("formats min and max as dates", () => {
      const DAYS_IN_MICROS = 24 * 60 * 60 * 1000 * 1000;
      const WEEK_IN_MICROS = 7 * DAYS_IN_MICROS;
      const props = getProps({
        // The default value should be divisible by step.
        // Otherwise, we get a warning from `react-range`.
        default: [0],
        min: 0,
        max: 4 * WEEK_IN_MICROS,
        step: DAYS_IN_MICROS,
        format: "YYYY-MM-DD",
        dataType: SliderProto.DataType.DATETIME
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const min = screen.getByTestId("stTickBarMin");
      const max = screen.getByTestId("stTickBarMax");
      expect(min).toHaveTextContent("1970-01-01");
      expect(max).toHaveTextContent("1970-01-29");
    });
  });
  describe("Options prop", () => {
    it("renders without crashing", () => {
      const props = getProps({
        default: [1],
        min: 0,
        max: 6,
        format: "%s",
        options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      expect(screen.getByRole("slider")).toBeDefined();
    });
    it("sets aria-valuetext correctly", () => {
      const props = getProps({
        default: [1],
        min: 0,
        max: 6,
        format: "%s",
        options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuetext", "orange");
    });
    it("updates aria-valuetext correctly", () => {
      const originalProps = {
        default: [1],
        min: 0,
        max: 6,
        format: "%s",
        options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
      };
      const props = getProps(originalProps);
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const slider = screen.getByRole("slider");
      triggerChangeEvent(slider, "ArrowRight");
      expect(slider).toHaveAttribute("aria-valuetext", "yellow");
    });
    it("sets aria-valuetext correctly for a range", () => {
      const props = getProps({
        default: [1, 4],
        min: 0,
        max: 6,
        format: "%s",
        options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
      });
      render( /*#__PURE__*/_jsx(Slider, {
        ...props
      }));
      const sliders = screen.getAllByRole("slider");
      expect(sliders[0]).toHaveAttribute("aria-valuetext", "orange");
      expect(sliders[1]).toHaveAttribute("aria-valuetext", "blue");
    });
  });
});
//# sourceMappingURL=Slider.test.js.map