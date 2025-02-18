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
class Maybe extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  shouldComponentUpdate(nextProps) {
    // We have our component update if either props.enable or nextProps.enable
    // is true to ensure that we rerender in the case that an Element is
    // removed by replacing it with an empty one (so goes from enabled->disabled).
    return this.props.enable || nextProps.enable;
  }
  render() {
    return this.props.children;
  }
}
export default Maybe;
//# sourceMappingURL=Maybe.js.map