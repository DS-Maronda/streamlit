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

import React, { PureComponent } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import FullScreenWrapper from "./FullScreenWrapper";

// Our wrapper takes the wrapped component's props, plus "width", "height?".
// It will pass "isFullScreen" to the wrapped component automatically
// (but the wrapped component is free to ignore that prop).
import { jsx as _jsx } from "react/jsx-runtime";
function withFullScreenWrapper(WrappedComponent) {
  let forceDisableFullScreenMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  class ComponentWithFullScreenWrapper extends PureComponent {
    constructor() {
      super(...arguments);
      this.render = () => {
        const {
          width,
          height,
          disableFullscreenMode
        } = this.props;
        return /*#__PURE__*/_jsx(FullScreenWrapper, {
          width: width,
          height: height,
          disableFullscreenMode: forceDisableFullScreenMode || disableFullscreenMode,
          children: _ref => {
            let {
              width,
              height,
              expanded,
              expand,
              collapse
            } = _ref;
            return (
              /*#__PURE__*/
              // `(this.props as P)` is required due to a TS bug:
              // https://github.com/microsoft/TypeScript/issues/28938#issuecomment-450636046
              _jsx(WrappedComponent, {
                ...this.props,
                width: width,
                height: height,
                isFullScreen: expanded,
                expand: expand,
                collapse: collapse
              })
            );
          }
        });
      };
    }
  }

  // Static methods must be copied over
  // https://en.reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  ComponentWithFullScreenWrapper.displayName = "withFullScreenWrapper(".concat(WrappedComponent.displayName || WrappedComponent.name, ")");
  return hoistNonReactStatics(ComponentWithFullScreenWrapper, WrappedComponent);
}
export default withFullScreenWrapper;
//# sourceMappingURL=withFullScreenWrapper.js.map