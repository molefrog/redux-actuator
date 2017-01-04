module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Actuator = undefined;

	var _actions = __webpack_require__(1);

	Object.keys(_actions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _actions[key];
	    }
	  });
	});

	var _createEngine = __webpack_require__(5);

	var _createEngine2 = _interopRequireDefault(_createEngine);

	var _Actuator = __webpack_require__(3);

	var _Actuator2 = _interopRequireDefault(_Actuator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _createEngine2.default;
	exports.Actuator = _Actuator2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var currentTimestamp = function currentTimestamp() {
	  return new Date().getTime();
	};

	// Actions
	var ACTUATE = exports.ACTUATE = 'redux-actuator/ACTUATE';

	// Action creators
	var actuate = exports.actuate = function actuate(channel, eventType) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var timestamp = currentTimestamp();

	  return {
	    type: ACTUATE,
	    payload: {
	      channel: channel,
	      event: {
	        type: eventType,
	        timestamp: timestamp,
	        args: args
	      }
	    }
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _ActuatorInner = __webpack_require__(4);

	var _ActuatorInner2 = _interopRequireDefault(_ActuatorInner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Actuator = function Actuator(_ref) {
	  var event = _ref.event,
	      events = _ref.events,
	      props = _objectWithoutProperties(_ref, ['event', 'events']);

	  return _react2.default.createElement(_ActuatorInner2.default, _extends({ event: event, handlers: events }, props));
	};

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var channels = state.actuator || {};
	  var event = channels[ownProps.channel];

	  return { event: event };
	};

	var WrappedActuator = (0, _reactRedux.connect)(mapStateToProps)(Actuator);

	WrappedActuator.propTypes = {
	  channel: _react2.default.PropTypes.string,
	  events: _react2.default.PropTypes.object.isRequired
	};

	WrappedActuator.defaultProps = {
	  channel: 'default'
	};

	exports.default = WrappedActuator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActuatorInner = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _currentTimestamp = __webpack_require__(7);

	var _currentTimestamp2 = _interopRequireDefault(_currentTimestamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ActuatorInner is an auxiliary component used internally
	// by Actuator component.
	// It has no connection to the store, it only responds to an event
	// change passed as a prop.

	var ActuatorInner = exports.ActuatorInner = function (_React$Component) {
	  _inherits(ActuatorInner, _React$Component);

	  function ActuatorInner() {
	    _classCallCheck(this, ActuatorInner);

	    return _possibleConstructorReturn(this, (ActuatorInner.__proto__ || Object.getPrototypeOf(ActuatorInner)).apply(this, arguments));
	  }

	  _createClass(ActuatorInner, [{
	    key: 'checkEvents',
	    value: function checkEvents(prevProps) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      // current and previous event payloads
	      var prevEvent = prevProps.event || {};
	      var event = this.props.event || {};

	      if (event.type && prevEvent.type === event.type && event.timestamp && prevEvent.timestamp === event.timestamp) {
	        return;
	      }

	      var deltaError = this.props.deltaError;

	      // This needs better clarification!

	      if (options.onMount && deltaError) {
	        var now = (0, _currentTimestamp2.default)();
	        var delta = Math.abs(now - event.timestamp);

	        if (delta > deltaError) {
	          return;
	        }
	      }

	      var eventHandlers = this.props.handlers || {};
	      if (eventHandlers[event.type]) {
	        eventHandlers[event.type].apply(eventHandlers, _toConsumableArray(event.args));
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.checkEvents(prevProps);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.checkEvents({}, { onMount: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) return null;
	      return this.props.children;
	    }
	  }]);

	  return ActuatorInner;
	}(_react2.default.Component);

	ActuatorInner.propTypes = {
	  handlers: _react2.default.PropTypes.object.isRequired,
	  deltaError: _react2.default.PropTypes.number,
	  event: _react2.default.PropTypes.object
	};

	exports.default = ActuatorInner;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reducer = __webpack_require__(6);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	  mountedAt: 'actuator'
	};

	var createEngine = function createEngine() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var engine = {
	    options: _extends({}, defaultOptions, options)
	  };

	  var reducer = (0, _reducer2.default)(engine);
	  return _extends({}, engine, { reducer: reducer });
	};

	exports.default = createEngine;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actions = __webpack_require__(1);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var createReducer = function createReducer(engine) {
	  return function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (action.type === _actions.ACTUATE) {
	      var _ref = action.payload || {},
	          channel = _ref.channel,
	          rest = _objectWithoutProperties(_ref, ['channel']);

	      var event = rest.event || {};

	      // Channel isn't given, ignore
	      if (!channel) {
	        return state;
	      }

	      return _extends({}, state, _defineProperty({}, channel, event));
	    }
	    return state;
	  };
	};

	exports.default = createReducer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var currentTimestamp = exports.currentTimestamp = function currentTimestamp() {
	  return new Date().getTime();
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ }
/******/ ]);