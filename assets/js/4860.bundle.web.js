(self.webpackChunknakhlex=self.webpackChunknakhlex||[]).push([[4860],{44860:function(e,t,r){var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(63038)),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(r(67294)),l=r(39698),o=r(59693),s=r(30657),u=r(9033),c=this,f="/Users/phinix/Workspace/BitBayt/src/features/Settings/screens/Settings.tsx";function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.default=function(e){var t,r=e.navigation,n=null==(t=e.route.params)?void 0:t.redirectTo,d=(0,u.useStore)().appVersion,p=(0,i.useState)(!0),b=(0,a.default)(p,2),m=b[0],g=b[1];(0,i.useEffect)((function(){n?r.replace(n):g(!1)}),[]);var _=[{id:"Profile",pressable:!0,icon:"Profile",label:(0,l.$t)("profile")},{id:"Referral",pressable:!0,icon:"Referral",label:(0,l.$t)("referral")},{id:"Privacy",pressable:!0,icon:"Privacy",label:(0,l.$t)("privacy")},{id:"PaymentMethods",pressable:!0,icon:"PaymentMethods",label:(0,l.$t)("paymentMethods")},{id:"AddressBook",pressable:!0,icon:"AddressBook",label:(0,l.$t)("addressBook")},{id:"Notification",pressable:!0,icon:"Notifications",label:(0,l.$t)("notification")},{id:"Support",pressable:!0,icon:"Support",label:(0,l.$t)("support")},{id:"About",pressable:!0,icon:"About",label:(0,l.$t)("about")},{id:"Language",pressable:!0,icon:"Language",label:(0,l.$t)("language")}];return i.default.createElement(o.Screen,{__self:c,__source:{fileName:f,lineNumber:86,columnNumber:5}},m&&i.default.createElement(o.Loading,{__self:c,__source:{fileName:f,lineNumber:87,columnNumber:21}}),i.default.createElement(o.View,{flex:10,justifyContent:"flex-end",__self:c,__source:{fileName:f,lineNumber:89,columnNumber:7}},(0,o.List)({data:m?[]:_,ListItem:function(e){return(0,s.SettingItem)(e)},onPress:function(e){r.navigate(e.id)},hideEmptyMessage:!0,refreshControl:void 0})),!m&&i.default.createElement(o.View,{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:"s",__self:c,__source:{fileName:f,lineNumber:102,columnNumber:9}},i.default.createElement(o.Text,{variant:"hint",textAlign:"center",color:"gray2",lineHeight:18,__self:c,__source:{fileName:f,lineNumber:107,columnNumber:11}},(0,l.$t)("version")," : ",d," ","https://staging.bitbayt.com".includes("staging")?"- Beta":""),i.default.createElement(o.Text,{variant:"hint",textAlign:"center",color:"gray3",lineHeight:18,__self:c,__source:{fileName:f,lineNumber:111,columnNumber:11}},(0,l.$t)("madeInIraq"))))}}}]);