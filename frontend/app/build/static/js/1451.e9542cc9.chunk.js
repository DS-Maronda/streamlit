"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[1451],{61451:(t,e,s)=>{s.r(e),s.d(e,{default:()=>C});var i=s(66845),r=s(53608),a=s.n(r),o=s(25621),n=s(15791),l=s(28278),d=s(13553),m=s(87814),p=s(98478),h=s(86659),c=s(8879),u=s(68411),g=s(50641),f=s(40864);const b="YYYY/MM/DD";function v(t){return t.map((t=>new Date(t)))}class y extends i.PureComponent{constructor(){super(...arguments),this.formClearHelper=new m.K,this.state={values:this.initialValue,isRange:this.props.element.isRange,isEmpty:!1},this.commitWidgetValue=t=>{const{widgetMgr:e,element:s,fragmentId:i}=this.props;var r;e.setStringArrayValue(s,(r=this.state.values)?r.map((t=>a()(t).format(b))):[],t,i)},this.onFormCleared=()=>{const t=v(this.props.element.default);this.setState({values:t,isEmpty:!t},(()=>this.commitWidgetValue({fromUi:!0})))},this.handleChange=t=>{let{date:e}=t;if(null===e||void 0===e)return void this.setState({values:[],isEmpty:!0});const s=[];Array.isArray(e)?e.forEach((t=>{t&&s.push(t)})):s.push(e),this.setState({values:s,isEmpty:!s},(()=>{this.state.isEmpty||this.commitWidgetValue({fromUi:!0})}))},this.handleClose=()=>{const{isEmpty:t}=this.state;t&&this.setState(((t,e)=>({values:v(e.element.default),isEmpty:!v(e.element.default)})),(()=>{this.commitWidgetValue({fromUi:!0})}))},this.getMaxDate=()=>{const{element:t}=this.props,e=t.max;return e&&e.length>0?a()(e,b).toDate():void 0}}get initialValue(){const t=this.props.widgetMgr.getStringArrayValue(this.props.element);return v(void 0!==t?t:this.props.element.default||[])}componentDidMount(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:t}=this.props.element;t&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:t}=this.props.element;this.props.element.setValue=!1;const e=t.map((t=>new Date(t)));this.setState({values:e,isEmpty:!e},(()=>{this.commitWidgetValue({fromUi:!1})}))}render(){var t;const{width:e,element:s,disabled:i,theme:r,widgetMgr:o}=this.props,{values:m,isRange:v}=this.state,{colors:y,fontSizes:C,lineHeights:W,spacing:D}=r,x={width:e},I=a()(s.min,b).toDate(),F=this.getMaxDate(),V=0===s.default.length&&!i,S=s.format.replaceAll(/[a-zA-Z]/g,"9"),k=s.format.replaceAll("Y","y").replaceAll("D","d");return this.formClearHelper.manageFormClearListener(o,s.formId,this.onFormCleared),(0,f.jsxs)("div",{className:"stDateInput","data-testid":"stDateInput",style:x,children:[(0,f.jsx)(p.O,{label:s.label,disabled:i,labelVisibility:(0,g.iF)(null===(t=s.labelVisibility)||void 0===t?void 0:t.value),children:s.help&&(0,f.jsx)(h.dT,{children:(0,f.jsx)(c.Z,{content:s.help,placement:u.u.TOP_RIGHT})})}),(0,f.jsx)(n.Z,{density:l.pw.high,formatString:k,mask:v?"".concat(S," \u2013 ").concat(S):S,placeholder:v?"".concat(s.format," \u2013 ").concat(s.format):s.format,disabled:i,onChange:this.handleChange,onClose:this.handleClose,overrides:{Popover:{props:{placement:d.r4.bottomLeft,overrides:{Body:{style:{border:"".concat(r.sizes.borderWidth," solid ").concat(y.fadedText10)}}}}},CalendarContainer:{style:{fontSize:C.sm,paddingRight:r.spacing.sm,paddingLeft:r.spacing.sm,paddingBottom:r.spacing.sm,paddingTop:r.spacing.sm}},Week:{style:{fontSize:C.sm}},Day:{style:t=>{let{$pseudoHighlighted:e,$pseudoSelected:s,$selected:i,$isHovered:r}=t;return{fontSize:C.sm,lineHeight:W.base,"::before":{backgroundColor:i||s||e||r?"".concat(y.secondaryBg," !important"):y.transparent},"::after":{borderColor:y.transparent}}}},PrevButton:{style:()=>({display:"flex",alignItems:"center",justifyContent:"center",":active":{backgroundColor:y.transparent},":focus":{backgroundColor:y.transparent,outline:0}})},NextButton:{style:{display:"flex",alignItems:"center",justifyContent:"center",":active":{backgroundColor:y.transparent},":focus":{backgroundColor:y.transparent,outline:0}}},Input:{props:{maskChar:null,overrides:{Root:{style:{borderLeftWidth:r.sizes.borderWidth,borderRightWidth:r.sizes.borderWidth,borderTopWidth:r.sizes.borderWidth,borderBottomWidth:r.sizes.borderWidth}},ClearIcon:{props:{overrides:{Svg:{style:{color:r.colors.darkGray,transform:"scale(1.41)",width:r.spacing.twoXL,marginRight:"-8px",":hover":{fill:r.colors.bodyText}}}}}},Input:{style:{paddingRight:D.sm,paddingLeft:D.sm,paddingBottom:D.sm,paddingTop:D.sm,lineHeight:W.inputWidget},props:{"data-testid":"stDateInput-Input"}}}}}},value:m,minDate:I,maxDate:F,range:v,clearable:V})]})}}const C=(0,o.b)(y)},87814:(t,e,s)=>{s.d(e,{K:()=>r});var i=s(50641);class r{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(t,e,s){(0,i.bb)(this.formClearListener)&&this.lastWidgetMgr===t&&this.lastFormId===e||(this.disconnect(),(0,i.bM)(e)&&(this.formClearListener=t.addFormClearedListener(e,s),this.lastWidgetMgr=t,this.lastFormId=e))}disconnect(){var t;null===(t=this.formClearListener)||void 0===t||t.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}}}]);