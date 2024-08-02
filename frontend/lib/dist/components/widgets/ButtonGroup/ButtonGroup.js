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

import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import isEqual from "lodash/isEqual";
import { ButtonGroup as BasewebButtonGroup, MODE } from "baseui/button-group";
import BaseButton, { BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import { DynamicIcon } from "../../shared/Icon";
import { ButtonGroup as ButtonGroupProto } from "../../../proto";
import { FormClearHelper } from "../Form/FormClearHelper";
import { jsx as _jsx } from "react/jsx-runtime";
function handleMultiSelection(index, currentSelection) {
  if (!currentSelection.includes(index)) {
    return [...currentSelection, index];
  }
  return currentSelection.filter(value => value !== index);
}
function handleSelection(mode, index, currentSelection) {
  if (mode == ButtonGroupProto.ClickMode.MULTI_SELECT) {
    return handleMultiSelection(index, currentSelection !== null && currentSelection !== void 0 ? currentSelection : []);
  }
  return [index];
}
function getSingleSelection(currentSelection) {
  if (currentSelection.length === 0) {
    return -1;
  }
  return currentSelection[0];
}
function syncWithWidgetManager(selected, element, widgetMgr, fragmentId) {
  let fromUi = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  widgetMgr.setIntArrayValue(element, selected, {
    fromUi: fromUi
  }, fragmentId);
}
function getContentElement(content) {
  return /*#__PURE__*/_jsx(DynamicIcon, {
    size: "lg",
    iconValue: content
  });
}

/**
 * Returns true if the element should be shown as selected (even though its technically not).
 * This is used, for example, to show all elements as selected that come before the actually selected element.
 *
 * @param selectionVisualization sets the visualization mode
 * @param clickMode either SINGLE_SELECT or MULTI_SELECT
 * @param selected list of selected indices. Since only SINGLE_SELECT is considered, this list will always have a length of 1.
 * @param index of the current element
 * @returns true if the element is the selected one, or if click_mode is SINGLE_SELECT and selectionVisualization is set to
 *  ALL_UP_TO_SELECTED and the index of the element is smaller than the index of the selected element, false otherwise.
 */
function showAsSelected(selectionVisualization, clickMode, selected, index) {
  if (selected.indexOf(index) > -1) {
    return true;
  }
  if (clickMode !== ButtonGroupProto.ClickMode.SINGLE_SELECT || selectionVisualization !== ButtonGroupProto.SelectionVisualization.ALL_UP_TO_SELECTED) {
    return false;
  }
  return selected.length > 0 && index < selected[0];
}
function getContent(isVisuallySelected, fallbackContent, selectionContent) {
  if (isVisuallySelected && selectionContent) {
    return selectionContent;
  }
  return fallbackContent;
}
function createOptionChild(option, index, selectionVisualization, clickMode, selected) {
  var _option$content;
  const isVisuallySelected = showAsSelected(selectionVisualization, clickMode, selected, index);
  const content = getContent(isVisuallySelected, (_option$content = option.content) !== null && _option$content !== void 0 ? _option$content : "", option.selectedContent);

  // we have to use forwardRef here becaused BasewebButtonGroup passes it down to its children
  const buttonKind = !isVisuallySelected || option.selectedContent || false ? BaseButtonKind.BORDERLESS_ICON : BaseButtonKind.BORDERLESS_ICON_ACTIVE;
  return /*#__PURE__*/forwardRef(function BaseButtonGroup(props, _) {
    return /*#__PURE__*/_jsx(BaseButton, {
      ...props,
      size: BaseButtonSize.XSMALL,
      kind: buttonKind,
      children: getContentElement(content)
    });
  });
}
function getInitialValue(widgetMgr, element) {
  const storedValue = widgetMgr.getIntArrayValue(element);
  return storedValue !== null && storedValue !== void 0 ? storedValue : element.default;
}
function ButtonGroup(props) {
  const {
    disabled,
    element,
    fragmentId,
    widgetMgr
  } = props;
  const {
    clickMode,
    default: defaultValues,
    options,
    value,
    selectionVisualization
  } = element;
  const theme = useTheme();
  const [selected, setSelected] = useState(getInitialValue(widgetMgr, element) || []);
  const elementRef = React.useRef(element);
  // set to undefined for the first render so we know when its mounted
  const selectedRef = React.useRef(undefined);

  // This is required for the form clearing functionality:
  useEffect(() => {
    if (!element.formId) {
      // We don't need the form clear functionality if its not in a form
      // or if selections are not activated.
      return;
    }
    const formClearHelper = new FormClearHelper();
    // On form clear, reset the selections (in chart & widget state)
    formClearHelper.manageFormClearListener(widgetMgr, element.formId, () => {
      setSelected(defaultValues);
    });
    return () => {
      formClearHelper.disconnect();
    };
  }, [element.formId, widgetMgr, defaultValues]);
  const valueString = useMemo(() => JSON.stringify(value), [value]);
  useEffect(() => {
    const parsedValue = JSON.parse(valueString);
    if (elementRef.current.setValue) {
      setSelected(parsedValue);
      syncWithWidgetManager(selected, elementRef.current, widgetMgr, fragmentId, false);
      elementRef.current.setValue = false;
    } else {
      // only commit to the backend if the value has changed
      if (isEqual(selected, selectedRef.current)) {
        return;
      }
      const fromUi = selectedRef.current === undefined ? false : true;
      syncWithWidgetManager(selected, elementRef.current, widgetMgr, fragmentId, fromUi);
    }
    selectedRef.current = selected;
  }, [selected, widgetMgr, fragmentId, valueString]);
  const onClick = (_event, index) => {
    const newSelected = handleSelection(clickMode, index, selected);
    setSelected(newSelected);
  };
  let mode = undefined;
  if (clickMode === ButtonGroupProto.ClickMode.SINGLE_SELECT) {
    mode = MODE.radio;
  } else if (clickMode === ButtonGroupProto.ClickMode.MULTI_SELECT) {
    mode = MODE.checkbox;
  }
  const optionElements = options.map((option, index) => {
    const Element = createOptionChild(option, index, selectionVisualization, clickMode, selected);
    return /*#__PURE__*/_jsx(Element, {}, "".concat(option.content, "-").concat(index));
  });
  return /*#__PURE__*/_jsx(BasewebButtonGroup, {
    disabled: disabled,
    mode: mode,
    onClick: onClick,
    selected: clickMode === ButtonGroupProto.ClickMode.MULTI_SELECT ? selected : getSingleSelection(selected),
    overrides: {
      Root: {
        style: {
          flexWrap: "wrap",
          gap: theme.spacing.threeXS
        },
        props: {
          "data-testid": "stButtonGroup"
        }
      }
    },
    children: optionElements
  });
}
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map