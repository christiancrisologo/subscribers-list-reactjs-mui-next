'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apiCaller = require('../lib/apiCaller');

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _PageWrapper = require('../components/PageWrapper');

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/christian/Documents/test/next/pages/Home.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var persons = this.props.persons;

      return _react2.default.createElement(_PageWrapper2.default, { title: 'HOME', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, ' HOME'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, persons;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apiCaller2.default)('https://uinames.com/api/?amount=25');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response;

              case 5:
                persons = _context.sent;
                return _context.abrupt('return', { persons: persons });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0hvbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJhcGlDYWxsZXIiLCJQYWdlV3JhcHBlciIsInBlcnNvbnMiLCJwcm9wcyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRYjtVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQyx1Q0FBWSxPQUFiLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFHTDs7Ozs7Ozs7Ozs7O3VCQVp3Qix5QkFBQSxBLEFBQVU7O21CQUEzQjtBOzt1QkFDZ0IsQTs7bUJBQWhCO0E7aURBQ0MsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKa0IsQSIsImZpbGUiOiJIb21lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc3RpYW4vRG9jdW1lbnRzL3Rlc3QvbmV4dCJ9