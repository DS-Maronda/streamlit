import _styled from "@emotion/styled/base";
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

import { hasLightBackgroundColor } from "../../../theme";
export const StyledDeckGlChart = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1az0zs51"
} : {
  target: "e1az0zs51",
  label: "StyledDeckGlChart"
})(_ref => {
  let {
    width,
    height,
    theme
  } = _ref;
  return {
    marginTop: theme.spacing.sm,
    position: "relative",
    height,
    width
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQsIHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbkNvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHJpZ2h0OiBcIjIuNjI1cmVtXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5tZCxcbiAgekluZGV4OiAxLFxuXG4gIC8vIFVwZGF0ZSB6b29tIGJ1dHRvbnMgYmFzZWQgb24gdGhlIGFjdGl2ZSB0aGVtZVxuICBcImJ1dHRvbjpub3QoOmRpc2FibGVkKVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJnQ29sb3IsXG5cbiAgICAvLyBBZGQgYSBzZXBhcmF0b3IgYmV0d2VlbiBidXR0b25zXG4gICAgXCImICsgYnV0dG9uXCI6IHtcbiAgICAgIGJvcmRlclRvcENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgfSxcblxuICAgIC8vIE9uIGRhcmsgYmFja2dyb3VuZHMsIGludmVydCB0aGUgY29sb3IgZm9yIHRoZSArIGFuZCAtIHN5bWJvbHNcbiAgICBcIiYgc3BhblwiOiB7XG4gICAgICBmaWx0ZXI6IGhhc0xpZ2h0QmFja2dyb3VuZENvbG9yKHRoZW1lKSA/IFwiXCIgOiBcImludmVydCgxMDAlKVwiLFxuICAgIH0sXG4gIH0sXG59KSlcbiJdfQ== */");
export const StyledNavigationControlContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1az0zs50"
} : {
  target: "e1az0zs50",
  label: "StyledNavigationControlContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    position: "absolute",
    right: "2.625rem",
    top: theme.spacing.md,
    zIndex: 1,
    // Update zoom buttons based on the active theme
    "button:not(:disabled)": {
      background: theme.colors.bgColor,
      // Add a separator between buttons
      "& + button": {
        borderTopColor: theme.colors.secondaryBg
      },
      // On dark backgrounds, invert the color for the + and - symbols
      "& span": {
        filter: hasLightBackgroundColor(theme) ? "" : "invert(100%)"
      }
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2dEIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQsIHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoLFxuICB9KVxuKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbkNvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIHJpZ2h0OiBcIjIuNjI1cmVtXCIsXG4gIHRvcDogdGhlbWUuc3BhY2luZy5tZCxcbiAgekluZGV4OiAxLFxuXG4gIC8vIFVwZGF0ZSB6b29tIGJ1dHRvbnMgYmFzZWQgb24gdGhlIGFjdGl2ZSB0aGVtZVxuICBcImJ1dHRvbjpub3QoOmRpc2FibGVkKVwiOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJnQ29sb3IsXG5cbiAgICAvLyBBZGQgYSBzZXBhcmF0b3IgYmV0d2VlbiBidXR0b25zXG4gICAgXCImICsgYnV0dG9uXCI6IHtcbiAgICAgIGJvcmRlclRvcENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgfSxcblxuICAgIC8vIE9uIGRhcmsgYmFja2dyb3VuZHMsIGludmVydCB0aGUgY29sb3IgZm9yIHRoZSArIGFuZCAtIHN5bWJvbHNcbiAgICBcIiYgc3BhblwiOiB7XG4gICAgICBmaWx0ZXI6IGhhc0xpZ2h0QmFja2dyb3VuZENvbG9yKHRoZW1lKSA/IFwiXCIgOiBcImludmVydCgxMDAlKVwiLFxuICAgIH0sXG4gIH0sXG59KSlcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map