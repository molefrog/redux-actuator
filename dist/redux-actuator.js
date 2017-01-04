module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Actuator=void 0;var o=r(1);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=r(5),a=n(u),i=r(3),c=n(i);t.default=a.default,t.Actuator=c.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return(new Date).getTime()},n=t.ACTUATE="redux-actuator/ACTUATE";t.actuate=function(e,t){for(var o=arguments.length,u=Array(o>2?o-2:0),a=2;o>a;a++)u[a-2]=arguments[a];var i=r();return{type:n,payload:{channel:e,event:{type:t,timestamp:i,args:u}}}}},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)<0&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2),i=n(a),c=r(8),f=r(4),l=n(f),s=function(e){var t=e.event,r=e.events,n=o(e,["event","events"]);return i.default.createElement(l.default,u({event:t,handlers:r},n))},p=function(e,t){var r=e.actuator||{},n=r[t.channel];return{event:n}},d=(0,c.connect)(p)(s);d.propTypes={channel:i.default.PropTypes.string,events:i.default.PropTypes.object.isRequired},d.defaultProps={channel:"default"},t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);e.length>t;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActuatorInner=void 0;var c=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),l=n(f),s=r(7),p=n(s),d=t.ActuatorInner=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"checkEvents",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.event||{},n=this.props.event||{};if(!n.type||r.type!==n.type||!n.timestamp||r.timestamp!==n.timestamp){var u=this.props.deltaError;if(t.onMount&&u){var a=(0,p.default)(),i=Math.abs(a-n.timestamp);if(i>u)return}var c=this.props.handlers||{};c[n.type]&&c[n.type].apply(c,o(n.args))}}},{key:"componentDidUpdate",value:function(e){this.checkEvents(e)}},{key:"componentDidMount",value:function(){this.checkEvents({},{onMount:!0})}},{key:"render",value:function(){return this.props.children?this.props.children:null}}]),t}(l.default.Component);d.propTypes={handlers:l.default.PropTypes.object.isRequired,deltaError:l.default.PropTypes.number,event:l.default.PropTypes.object},t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(6),a=n(u),i={mountedAt:"actuator"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={options:o({},i,e)},r=(0,a.default)(t);return o({},t,{reducer:r})};t.default=c},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r={};for(var n in e)t.indexOf(n)<0&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1),i=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(t.type===a.ACTUATE){var r=t.payload||{},i=r.channel,c=o(r,["channel"]),f=c.event||{};return i?u({},e,n({},i,f)):e}return e}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.currentTimestamp=function(){return(new Date).getTime()}},function(e,t){e.exports=require("react-redux")}]);