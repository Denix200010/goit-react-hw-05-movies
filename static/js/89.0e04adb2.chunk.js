"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[89],{89:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(413),i=t(861),c=t(885),o=t(757),s=t.n(o),a="movieDetails_backBtn__Ct37b",u=t(791),l=t(731),d=t(689),f=t(184),h=function(){var e=(0,u.useState)("/movies"),r=(0,c.Z)(e,2),t=r[0],o=r[1],h=(0,d.UO)().movieId,v=(0,u.useState)({}),p=(0,c.Z)(v,2),b=p[0],j=p[1],m=(0,d.TH)();return(0,u.useEffect)((function(){var e,r;"/movies"===t&&o(null!==(e=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");var c=function(){var e=(0,i.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat("9ed87961dbb9b8beebb5f02b4b9b3eb3","&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();c(h).then((function(e){j((0,n.Z)({},e))}))}),[h,m,t]),(0,f.jsx)(f.Fragment,{children:b.id&&(0,f.jsxs)("div",{children:[(0,f.jsx)(l.rU,{to:t,className:a,children:"go back"}),(0,f.jsxs)("div",{children:[b.backdrop_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(b.backdrop_path),alt:""}):(0,f.jsx)("p",{children:"We can't find movie poster :("}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[b.title||b.name,"(",b.release_date.substr(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",Number(10*b.vote_average).toFixed(),"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:b.overview}),(0,f.jsx)("h2",{children:"Genres:"}),(0,f.jsx)("p",{children:b.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(d.j3,{})]})})}},861:function(e,r,t){function n(e,r,t,n,i,c,o){try{var s=e[c](o),a=s.value}catch(u){return void t(u)}s.done?r(a):Promise.resolve(a).then(n,i)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(i,c){var o=e.apply(r,t);function s(e){n(o,i,c,s,a,"next",e)}function a(e){n(o,i,c,s,a,"throw",e)}s(void 0)}))}}t.d(r,{Z:function(){return i}})},942:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},413:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(942);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}}}]);
//# sourceMappingURL=89.0e04adb2.chunk.js.map