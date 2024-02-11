"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[462],{462:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),s=t(87),i=t(782),f=t(184),p=function(r){var e=r.value,t=(r.onChange,r.onSubmit),n=(0,o.useState)(e),a=(0,c.Z)(n,2),u=a[0],s=a[1];return(0,f.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t&&t(u)},children:[(0,f.jsx)("h2",{children:"Movie Search"}),(0,f.jsx)("input",{type:"text",value:u,onChange:function(r){s(r.target.value)},placeholder:"Search movies..."}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=t(689),h=function(r){var e=r.films,t=(0,v.TH)();return(0,f.jsx)("ul",{children:e.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(r.id),state:{from:t},cover:r.poster_path,children:r.title})},r.id)}))})},l=function(){var r=(0,o.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1],v=(0,s.lr)(),l=(0,c.Z)(v,2),d=l[0],m=l[1],x=d.get("query")||"",w=(0,o.useState)(!1),g=(0,c.Z)(w,2),b=g[0],Z=g[1],y=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,Z(!0),r.next=4,(0,i.o1)(e);case 4:t=r.sent,a(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:return r.prev=11,Z(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(e){return r.apply(this,arguments)}}();return(0,o.useEffect)((function(){""!==x?y(x):a([])}),[x]),(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{value:x,onChange:function(r){m({query:r})},onSubmit:y}),b?(0,f.jsx)("h2",{children:"Loading..."}):0===t.length&&x?(0,f.jsx)("h2",{children:"No movie with this name"}):(0,f.jsx)(h,{films:t})]})}},782:function(r,e,t){t.d(e,{uV:function(){return p},Y5:function(){return f},Hx:function(){return v},wr:function(){return s},o1:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o={params:{api_key:"2593d85031c68d42eea847806b363736",language:"en-US"}},s=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day",o);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie?query=".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error('Error searching for "'.concat(e,'":'),r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=462.c38f862c.chunk.js.map