"use strict";function swipedetect(e,t){var a,s,n,o,d,i,u,c=e,p=t||function(e){};c.addEventListener("touchstart",function(e){var t=e.changedTouches[0];a="none",s=t.pageX,n=t.pageY,u=(new Date).getTime()},{passive:!0}),c.addEventListener("touchend",function(e){var t=e.changedTouches[0];o=t.pageX-s,d=t.pageY-n,i=(new Date).getTime()-u,i<=300&&(Math.abs(o)>=150&&Math.abs(d)<=100?a=o<0?"left":"right":Math.abs(d)>=150&&Math.abs(o)<=100&&(a=d<0?"up":"down")),p(a)},{passive:!0})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=swipedetect,module.exports=exports.default;