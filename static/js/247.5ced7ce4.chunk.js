"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(982),c=n(861),a=n(885),i=n(757),u=n.n(i),o=n(791),s=n(689),f=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),i=n[0],h=n[1];return(0,o.useEffect)((function(){var t=function(){var e=(0,c.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("9ed87961dbb9b8beebb5f02b4b9b3eb3","&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(e).then((function(e){h((0,r.Z)(e.cast))}))}),[e]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:i.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"//i.work.ua/career_guide/59_b.png",alt:e.name,width:"200"}),(0,f.jsxs)("p",{children:["Character: ",e.character]}),(0,f.jsxs)("p",{children:["Name: ",e.name]})]},e.cast_id)}))})})}},861:function(e,t,n){function r(e,t,n,r,c,a,i){try{var u=e[a](i),o=u.value}catch(s){return void n(s)}u.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var i=e.apply(t,n);function u(e){r(i,c,a,u,o,"next",e)}function o(e){r(i,c,a,u,o,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=247.5ced7ce4.chunk.js.map