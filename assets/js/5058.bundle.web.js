(self.webpackChunknakhlex=self.webpackChunknakhlex||[]).push([[5058],{25058:function(e,t,a){var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67154)),u=n(a(63038)),i=n(a(67294)),r=a(39698),f=a(59693),o=a(51222),s=a(61330),c=this,m="/Users/phinix/Workspace/BitBayt/src/features/Home/screens/Notifications.tsx",d=function(){var e=(0,o.useAllNotificationsApi)(),t=e.data,a=void 0===t?{pages:[[]]}:t,n=e.isLoading,u=e.hasNextPage,r=e.fetchNextPage,d=e.isFetchingNextPage;return i.default.createElement(f.View,{flex:1,justifyContent:"center",__self:c,__source:{fileName:m,lineNumber:53,columnNumber:5}},Boolean(n)&&i.default.createElement(f.Loading,{__self:c,__source:{fileName:m,lineNumber:54,columnNumber:30}}),(0,f.List)({data:a&&a.pages&&a.pages[0]?a.pages[0].map((function(e,t){return(0,l.default)({id:"NotificationId_"+t},e.notification)})):[],ListItem:s.NotificationListItem,loadMore:function(){u&&r&&r({pageParam:{offset:a.pages.flat().length}})},queryKey:"allNotifications",isFetchingNextPage:d,hideSeparator:!0}))},_={all:i.default.memo((function(){return i.default.createElement(d,{__self:c,__source:{fileName:m,lineNumber:24,columnNumber:19}})})),transaction:i.default.memo((function(){return i.default.createElement(i.default.Fragment,null)})),news:i.default.memo((function(){return i.default.createElement(f.View,{flex:1,justifyContent:"center",alignItems:"center",__self:c,__source:{fileName:m,lineNumber:27,columnNumber:3}},(0,f.List)({data:[],ListItem:function(){return i.default.createElement(i.default.Fragment,null)}}))})),activity:i.default.memo((function(){return i.default.createElement(d,{__self:c,__source:{fileName:m,lineNumber:34,columnNumber:24}})}))};t.default=function(){var e=i.default.useState([{key:"all",title:(0,r.$t)("all")},{key:"news",title:(0,r.$t)("news")}]),t=(0,u.default)(e,1)[0];return i.default.createElement(f.Screen,{noPadding:!0,__self:c,__source:{fileName:m,lineNumber:18,columnNumber:5}},i.default.createElement(f.Tabs,{scenes:_,routes:t,__self:c,__source:{fileName:m,lineNumber:19,columnNumber:7}}))}}}]);