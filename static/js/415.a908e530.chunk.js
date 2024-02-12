"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{510:function(r,t,e){e.d(t,{Z:function(){return i}});e(791);var n=e(689),c=e(87),a="MovieList_movieList__uFrOZ",o="MovieList_movieListItem__6DqRG",s="MovieList_linkStyle__TSwN3",u=e(184),i=function(r){var t=r.films,e=(0,n.TH)();return(0,u.jsx)("ol",{className:a,children:t.map((function(r){return(0,u.jsxs)("li",{className:o,children:["\ud83c\udf9e\ufe0f ","",(0,u.jsx)(c.rU,{to:"/movies/".concat(r.id),state:{from:e},cover:r.poster_path,className:s,children:r.title})]},r.id)}))})}},415:function(r,t,e){e.r(t);var n=e(861),c=e(439),a=e(757),o=e.n(a),s=e(791),u=e(510),i=e(782),v=e(184);t.default=function(){var r=(0,s.useState)([]),t=(0,c.Z)(r,2),e=t[0],a=t[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.wr)();case 3:t=r.sent,a(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Trending today:"}),(0,v.jsx)(u.Z,{films:e})]})}},782:function(r,t,e){e.d(t,{uV:function(){return f},Y5:function(){return v},Hx:function(){return p},wr:function(){return u},o1:function(){return i}});var n=e(861),c=e(757),a=e.n(c),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"2593d85031c68d42eea847806b363736",language:"en-US"}},u=function(){var r=(0,n.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("trending/movie/day",s);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("/search/movie?query=".concat(t),s);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error('Error searching for "'.concat(t,'":'),r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("/movie/".concat(t),s);case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("movie/".concat(t,"/credits?"),s);case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("movie/".concat(t,"/reviews?"),s);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.a908e530.chunk.js.map