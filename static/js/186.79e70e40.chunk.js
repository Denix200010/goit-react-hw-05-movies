"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{243:function(n,t,e){function r(n,t,e,r,u,a,c){try{var o=n[a](c),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,a){var c=n.apply(t,e);function o(n){r(c,u,a,o,i,"next",n)}function i(n){r(c,u,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{zJ:function(){return h},XK:function(){return f},E3:function(){return s},Zn:function(){return i},Bt:function(){return p}});var a=e(757),c=e.n(a),o="9ed87961dbb9b8beebb5f02b4b9b3eb3",i=function(){var n=u(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=u(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=u(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=u(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=u(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},186:function(n,t,e){e.r(t);var r=e(982),u=e(885),a=e(243),c=e(791),o=e(689),i=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,c.useState)([]),e=(0,u.Z)(t,2),s=e[0],f=e[1];return(0,c.useEffect)((function(){(0,a.Bt)(n).then((function(n){f((0,r.Z)(n.results))}))}),[n]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:s.length?s.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",n.author]}),(0,i.jsx)("p",{children:n.content})]},n.id)})):"Sorry, no one has left a review yet :("})})}}}]);
//# sourceMappingURL=186.79e70e40.chunk.js.map