(self.webpackChunknakhlex=self.webpackChunknakhlex||[]).push([[4324],{44324:function(e,t,l){var r=l(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67154)),u=r(l(63038)),n=r(l(6479)),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=y(t);if(l&&l.has(e))return l.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var n=a?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(r,u,n):r[u]=e[u]}return r.default=e,l&&l.set(e,r),r}(l(67294)),m=l(59693),o=l(39698),s=l(50599),c=l(34787),f=l(46823),_=l(51222),d=l(40930),N=["side","cancelledBySystem"],b=this,p="/Users/phinix/Workspace/BitBayt/src/features/P2P/screens/CancelOrder.tsx";function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(y=function(e){return e?l:t})(e)}var v=(0,f.createSchema)({reason:(0,f.requiredStringSchema)((0,o.$t)("reason")),otherReasons:(0,f.stringSchema)()});t.default=function(e){var t=e.route,l=e.navigation,r=t.params,f=r.side,y=r.cancelledBySystem,E=(0,n.default)(r,N),h=(0,i.useState)(!y),w=(0,u.default)(h,1)[0],P=(0,i.useMemo)((function(){return y?(0,o.$t)("OrderWasCancelled"):(0,o.$t)("youCancelledOrder")}),[y]),g=(0,_.useP2PCancelReasonsApi)(),O=g.data,x=g.isFetching,C=(0,i.useMemo)((function(){return Object.keys(O||{}).map((function(e){return{label:O[e].value,value:e}}))}),[O]),S=(0,c.useCustomForm)(v),j=S.control,I=S.handleSubmit,k=S.formState.isValid,D=(0,d.useController)({control:j,name:"reason"}).field.value,V=(0,_.useCancelP2POrderApi)().mutate;return i.default.createElement(m.Screen,{__self:b,__source:{fileName:p,lineNumber:75,columnNumber:5}},w?i.default.createElement(m.View,{flex:1,justifyContent:"space-between",__self:b,__source:{fileName:p,lineNumber:77,columnNumber:9}},i.default.createElement(m.View,{__self:b,__source:{fileName:p,lineNumber:78,columnNumber:11}},i.default.createElement(m.Text,{variant:"hint",marginVertical:"m",__self:b,__source:{fileName:p,lineNumber:79,columnNumber:13}},(0,o.$t)("cancelHint")),i.default.createElement(m.View,{justifyContent:"flex-start",__self:b,__source:{fileName:p,lineNumber:83,columnNumber:13}},x?i.default.createElement(m.Loading,{__self:b,__source:{fileName:p,lineNumber:85,columnNumber:17}}):i.default.createElement(m.RadioButton,{name:"reason",control:j,radioButtons:C,__self:b,__source:{fileName:p,lineNumber:87,columnNumber:17}}),"other_reason"===D&&i.default.createElement(m.Input,{control:j,name:"otherReasons",textarea:!0,__self:b,__source:{fileName:p,lineNumber:95,columnNumber:17}}))),i.default.createElement(m.Button,{disabled:!k,variant:"primary",label:(0,o.$t)("submit"),onPress:I((function(e){V((0,a.default)({},e,{orderId:E.orderId}),{onSuccess:function(){(0,m.showPopupMessage)(P,"success"),l.navigate("MyOrders")}})})),__self:b,__source:{fileName:p,lineNumber:100,columnNumber:11}})):i.default.createElement(m.View,{flex:1,justifyContent:"space-between",__self:b,__source:{fileName:p,lineNumber:108,columnNumber:9}},i.default.createElement(m.View,{__self:b,__source:{fileName:p,lineNumber:109,columnNumber:11}},i.default.createElement(m.View,{marginTop:"m",flexDirection:"row",justifyContent:"space-between",alignItems:"center",__self:b,__source:{fileName:p,lineNumber:110,columnNumber:13}},i.default.createElement(m.Text,{variant:"hint",__self:b,__source:{fileName:p,lineNumber:115,columnNumber:15}},P),i.default.createElement(m.View,{__self:b,__source:{fileName:p,lineNumber:117,columnNumber:15}})),i.default.createElement(m.View,{__self:b,__source:{fileName:p,lineNumber:120,columnNumber:13}},i.default.createElement(s.CoinSide,{side:f,coin:"USDT",__self:b,__source:{fileName:p,lineNumber:121,columnNumber:15}}),i.default.createElement(s.DetailItem,{item:"unitPrice",details:{unitPrice:parseFloat(E.price).toFixed(2)},__self:b,__source:{fileName:p,lineNumber:123,columnNumber:15}}),i.default.createElement(s.DetailItem,{item:"quantity",details:{quantity:parseFloat(E.volume).toFixed(2)},__self:b,__source:{fileName:p,lineNumber:127,columnNumber:15}}),i.default.createElement(s.DetailItem,{item:"totalAmount",details:{totalAmount:(parseFloat(E.price)*parseFloat(E.volume)).toFixed(2)},__self:b,__source:{fileName:p,lineNumber:131,columnNumber:15}}),"buy"===f?i.default.createElement(s.DetailItem,{item:"sellerName",details:E,__self:b,__source:{fileName:p,lineNumber:140,columnNumber:17}}):i.default.createElement(s.DetailItem,{item:"buyerName",details:E,__self:b,__source:{fileName:p,lineNumber:142,columnNumber:17}}),i.default.createElement(s.DetailItem,{item:"status",details:{status:E.paid?(0,o.$t)("paid"):(0,o.$t)("notPaid")},__self:b,__source:{fileName:p,lineNumber:145,columnNumber:15}}))),i.default.createElement(m.Button,{variant:"outline",label:(0,o.$t)("dispute"),onPress:function(){return l.navigate("Dispute",{side:f,orderId:E.orderId})},__self:b,__source:{fileName:p,lineNumber:152,columnNumber:11}})))}}}]);