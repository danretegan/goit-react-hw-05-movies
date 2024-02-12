"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{321:function(r,e,t){var n=t(184);e.Z=function(){return(0,n.jsx)("div",{children:"Loading..."})}},510:function(r,e,t){t.d(e,{Z:function(){return s}});t(791);var n=t(689),c=t(87),a="MovieList_movieList__uFrOZ",u="MovieList_movieListItem__6DqRG",o=t(184),s=function(r){var e=r.films,t=(0,n.TH)();return(0,o.jsx)("ul",{className:a,children:e.map((function(r){return(0,o.jsxs)("li",{className:u,children:["\ud83c\udf9e\ufe0f"," ",(0,o.jsx)(c.rU,{to:"/movies/".concat(r.id),state:{from:t},cover:r.poster_path,children:r.title})]},r.id)}))})}},828:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),s=t(87),i=t(782),v=t(184),f=function(r){var e=r.value,t=r.onSubmit,n=(0,o.useState)(e),a=(0,c.Z)(n,2),u=a[0],s=a[1];return(0,v.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t&&t(u)},children:[(0,v.jsx)("h2",{children:"Movie Search:"}),(0,v.jsx)("input",{type:"text",value:u,onChange:function(r){s(r.target.value)},placeholder:"Search movies..."}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})},p=t(510),h=t(321),l=function(){var r=(0,o.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1],l=(0,s.lr)(),d=(0,c.Z)(l,2),m=d[0],x=d[1],w=m.get("query")||"",g=(0,o.useState)(!1),Z=(0,c.Z)(g,2),b=Z[0],_=Z[1],y=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,_(!0),r.next=4,(0,i.o1)(e);case 4:t=r.sent,a(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:return r.prev=11,_(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(e){return r.apply(this,arguments)}}();return(0,o.useEffect)((function(){""!==w?y(w):a([])}),[w]),(0,v.jsxs)("div",{children:[(0,v.jsx)(f,{value:w,onChange:function(r){x({query:r})},onSubmit:y}),b?(0,v.jsx)(h.Z,{}):0===t.length&&w?(0,v.jsx)("h2",{children:"No movie with this name. Try something else."}):(0,v.jsx)(p.Z,{films:t})]})}},782:function(r,e,t){t.d(e,{uV:function(){return f},Y5:function(){return v},Hx:function(){return p},wr:function(){return s},o1:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o={params:{api_key:"2593d85031c68d42eea847806b363736",language:"en-US"}},s=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day",o);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie?query=".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error('Error searching for "'.concat(e,'":'),r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=828.f8f3e276.chunk.js.map