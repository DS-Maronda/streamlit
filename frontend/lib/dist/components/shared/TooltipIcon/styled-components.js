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
export const StyledTooltipIconWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "ewgb6652"
} : {
  target: "ewgb6652",
  label: "StyledTooltipIconWrapper"
})(_ref => {
  let {
    isLatex,
    theme
  } = _ref;
  return {
    display: "flex",
    alignItems: "center",
    marginTop: isLatex ? theme.spacing.mdPx : "0",
    "& .stTooltipHoverTarget > svg": {
      stroke: theme.colors.fadedText60,
      strokeWidth: 2.25
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sdGlwSWNvbi9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkUiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1Rvb2x0aXBJY29uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmludGVyZmFjZSBTdHlsZWRUb29sdGlwSWNvbldyYXBwZXJQcm9wcyB7XG4gIGlzTGF0ZXg/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUb29sdGlwSWNvbldyYXBwZXIgPVxuICBzdHlsZWQuZGl2PFN0eWxlZFRvb2x0aXBJY29uV3JhcHBlclByb3BzPigoeyBpc0xhdGV4LCB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBpc0xhdGV4ID8gdGhlbWUuc3BhY2luZy5tZFB4IDogXCIwXCIsXG5cbiAgICBcIiYgLnN0VG9vbHRpcEhvdmVyVGFyZ2V0ID4gc3ZnXCI6IHtcbiAgICAgIHN0cm9rZTogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDYwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDIuMjUsXG4gICAgfSxcbiAgfSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYWJlbEhlbHBXcmFwcGVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExhYmVsSGVscElubGluZSA9IHN0eWxlZC5sYWJlbCgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnhzLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbn0pKVxuIl19 */");
export const StyledLabelHelpWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "ewgb6651"
} : {
  target: "ewgb6651",
  label: "StyledLabelHelpWrapper"
})(() => ({
  display: "flex",
  visibility: "visible",
  verticalAlign: "middle",
  flexDirection: "row",
  alignItems: "center"
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sdGlwSWNvbi9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3NDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sdGlwSWNvbi9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbnRlcmZhY2UgU3R5bGVkVG9vbHRpcEljb25XcmFwcGVyUHJvcHMge1xuICBpc0xhdGV4PzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVG9vbHRpcEljb25XcmFwcGVyID1cbiAgc3R5bGVkLmRpdjxTdHlsZWRUb29sdGlwSWNvbldyYXBwZXJQcm9wcz4oKHsgaXNMYXRleCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblRvcDogaXNMYXRleCA/IHRoZW1lLnNwYWNpbmcubWRQeCA6IFwiMFwiLFxuXG4gICAgXCImIC5zdFRvb2x0aXBIb3ZlclRhcmdldCA+IHN2Z1wiOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgICAgIHN0cm9rZVdpZHRoOiAyLjI1LFxuICAgIH0sXG4gIH0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTGFiZWxIZWxwV3JhcHBlciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYWJlbEhlbHBJbmxpbmUgPSBzdHlsZWQubGFiZWwoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy54cyxcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG59KSlcbiJdfQ== */");
export const StyledLabelHelpInline = /*#__PURE__*/_styled("label", process.env.NODE_ENV === "production" ? {
  target: "ewgb6650"
} : {
  target: "ewgb6650",
  label: "StyledLabelHelpInline"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    marginLeft: theme.spacing.xs,
    position: "relative",
    display: "flex",
    flexDirection: "row"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sdGlwSWNvbi9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3FDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sdGlwSWNvbi9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbnRlcmZhY2UgU3R5bGVkVG9vbHRpcEljb25XcmFwcGVyUHJvcHMge1xuICBpc0xhdGV4PzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkVG9vbHRpcEljb25XcmFwcGVyID1cbiAgc3R5bGVkLmRpdjxTdHlsZWRUb29sdGlwSWNvbldyYXBwZXJQcm9wcz4oKHsgaXNMYXRleCwgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblRvcDogaXNMYXRleCA/IHRoZW1lLnNwYWNpbmcubWRQeCA6IFwiMFwiLFxuXG4gICAgXCImIC5zdFRvb2x0aXBIb3ZlclRhcmdldCA+IHN2Z1wiOiB7XG4gICAgICBzdHJva2U6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgICAgIHN0cm9rZVdpZHRoOiAyLjI1LFxuICAgIH0sXG4gIH0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTGFiZWxIZWxwV3JhcHBlciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxuICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSkpXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYWJlbEhlbHBJbmxpbmUgPSBzdHlsZWQubGFiZWwoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy54cyxcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG59KSlcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map