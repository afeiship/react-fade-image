!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-if-else")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-dom","react-if-else"],t):"object"==typeof exports?exports.ReactFadeImage=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-if-else")):e.ReactFadeImage=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"],e["react-if-else"])}(this,function(e,t,r,o,n,a,c){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(6),d=o(l),y=r(7),b=(o(y),r(5)),m=o(b),h=r(2),v=o(h),g=r(3),j=o(g),x=r(4),_=(o(x),r(8)),O=(o(_),i=u=function(e){function t(){var e,r,o,n;a(this,t);for(var s=arguments.length,u=Array(s),i=0;i<s;i++)u[i]=arguments[i];return r=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={loaded:!1},o._onLoad=function(e){var t=o.props.onChange;o.setState({loaded:!0},function(){t(e)})},n=r,c(o,n)}return s(t,e),p(t,[{key:"shouldComponentUpdate",value:function(){return!this.props.once}},{key:"render",value:function(){var e=this.props,t=(e.lazy,e.src,e.className),r=n(e,["lazy","src","className"]),o=this.state.loaded;return d.default.createElement("img",f({onLoad:this._onLoad,"data-loaded":o,className:(0,v.default)("react-fade-image",t)},this.src,r))}},{key:"src",get:function(){var e=this.props,t=e.lazy,r=e.src;return t?{"data-src":r}:{src:r}}}]),t}(l.Component),u.propTypes={className:m.default.string,lazy:m.default.bool,once:m.default.bool,onChange:m.default.func},u.defaultProps={lazy:!1,once:!0,onChange:j.default},i);t.default=O},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=c}])});
//# sourceMappingURL=react-fade-image.js.map