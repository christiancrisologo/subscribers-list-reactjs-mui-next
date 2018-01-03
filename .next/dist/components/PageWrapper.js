'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _materialUi = require('material-ui');

var _keyboardArrowLeft = require('material-ui/svg-icons/hardware/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _inbox = require('material-ui/svg-icons/content/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/christian/Documents/test/next/components/PageWrapper.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    }, _this.handleClose = function () {
      return _this.setState({ open: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var _props = this.props,
          children = _props.children,
          title = _props.title,
          appName = _props.appName;

      var leftAppBarButton = _react2.default.createElement(_materialUi.IconMenu, {
        iconButtonElement: _react2.default.createElement(_materialUi.IconButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement(_moreVert2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        })),
        targetOrigin: { horizontal: 'right', vertical: 'top' },
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_materialUi.MenuItem, { primaryText: 'Refresh', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_materialUi.MenuItem, { primaryText: 'Help', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_materialUi.MenuItem, { primaryText: 'Sign out', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }));

      return _react2.default.createElement('div', {
        className: 'jsx-3736094094',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3736094094',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('title', {
        className: 'jsx-3736094094',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, title)), _react2.default.createElement('div', {
        className: 'jsx-3736094094' + ' ' + 'main-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_MuiThemeProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_materialUi.Drawer, { width: 250, open: this.state.open, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_materialUi.AppBar, {
        title: appName || 'COOL',
        iconStyleLeft: { display: 'none' },
        iconElementLeft: null,
        iconElementRight: _react2.default.createElement(_materialUi.IconButton, { onClick: this.handleClose, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement(_keyboardArrowLeft2.default, { color: 'white', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_materialUi.MenuItem, { onClick: this.handleClose, leftIcon: _react2.default.createElement(_inbox2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'My Subscribers'), _react2.default.createElement(_materialUi.MenuItem, { onClick: this.handleClose, leftIcon: _react2.default.createElement(_grade2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Manage Subscriber')), _react2.default.createElement(_materialUi.AppBar, (_React$createElement = {
        title: title,
        iconElementRight: _react2.default.createElement(_materialUi.FlatButton, { label: 'Login', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        })
      }, (0, _defineProperty3.default)(_React$createElement, 'iconElementRight', leftAppBarButton), (0, _defineProperty3.default)(_React$createElement, 'onLeftIconButtonClick', this.handleToggle), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 67
      }), _React$createElement)), _react2.default.createElement('div', {
        className: 'jsx-3736094094' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, children))), _react2.default.createElement(_style2.default, {
        styleId: '3736094094',
        css: 'body{margin:0;padding:0;font-family:Roboto,Arial;}.main-wrapper{width:100%;min-height:100%;height:100%;overflow-x:hidden;}.content{width:100%;height:100%;padding:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZVdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkUyQixBQUdzQixBQUtFLEFBTUEsU0FWRCxFQUtNLEFBTUosUUFWYyxJQVdiLElBTkQsU0FPZCxHQU5vQixLQUxwQixhQU1BIiwiZmlsZSI6ImNvbXBvbmVudHMvUGFnZVdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NocmlzdGlhbi9Eb2N1bWVudHMvdGVzdC9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsgQXBwQmFyLCBGbGF0QnV0dG9uLCBEcmF3ZXIsIE1lbnVJdGVtLCBJY29uQnV0dG9uLCBJY29uTWVudSB9IGZyb20gJ21hdGVyaWFsLXVpJztcbmltcG9ydCBBcnJvd0xlZnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9oYXJkd2FyZS9rZXlib2FyZC1hcnJvdy1sZWZ0JztcbmltcG9ydCBDb250ZW50SW5ib3ggZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvaW5ib3gnO1xuaW1wb3J0IEFjdGlvbkdyYWRlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vZ3JhZGUnO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB9O1xuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCBhcHBOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxlZnRBcHBCYXJCdXR0b24gPSAoXG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgaWNvbkJ1dHRvbkVsZW1lbnQ9e1xuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRPcmlnaW49e3sgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH19XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiUmVmcmVzaFwiIC8+XG4gICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIkhlbHBcIiAvPlxuICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJTaWduIG91dFwiIC8+XG4gICAgICA8L0ljb25NZW51PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDxEcmF3ZXIgd2lkdGg9ezI1MH0gb3Blbj17dGhpcy5zdGF0ZS5vcGVufT5cbiAgICAgICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgICAgIHRpdGxlPXthcHBOYW1lIHx8ICdDT09MJ31cbiAgICAgICAgICAgICAgICBpY29uU3R5bGVMZWZ0PXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgIGljb25FbGVtZW50TGVmdD17bnVsbH1cbiAgICAgICAgICAgICAgICBpY29uRWxlbWVudFJpZ2h0PXtcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0SWNvbiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfSBsZWZ0SWNvbj17PENvbnRlbnRJbmJveCAvPn0+XG4gICAgICAgICAgICAgICAgTXkgU3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9IGxlZnRJY29uPXs8QWN0aW9uR3JhZGUgLz59PlxuICAgICAgICAgICAgICAgIE1hbmFnZSBTdWJzY3JpYmVyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIDxBcHBCYXJcbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICBpY29uRWxlbWVudFJpZ2h0PXs8RmxhdEJ1dHRvbiBsYWJlbD1cIkxvZ2luXCIgLz59XG4gICAgICAgICAgICAgIGljb25FbGVtZW50UmlnaHQ9e2xlZnRBcHBCYXJCdXR0b259XG4gICAgICAgICAgICAgIG9uTGVmdEljb25CdXR0b25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/PageWrapper.js */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};
exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZVdyYXBwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJIZWFkIiwiTXVpVGhlbWVQcm92aWRlciIsIkFwcEJhciIsIkZsYXRCdXR0b24iLCJEcmF3ZXIiLCJNZW51SXRlbSIsIkljb25CdXR0b24iLCJJY29uTWVudSIsIkFycm93TGVmdEljb24iLCJDb250ZW50SW5ib3giLCJBY3Rpb25HcmFkZSIsIk1vcmVWZXJ0SWNvbiIsInN0YXRlIiwib3BlbiIsImhhbmRsZVRvZ2dsZSIsInNldFN0YXRlIiwiaGFuZGxlQ2xvc2UiLCJwcm9wcyIsImNoaWxkcmVuIiwidGl0bGUiLCJhcHBOYW1lIiwibGVmdEFwcEJhckJ1dHRvbiIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFZLEFBQVEsQUFBVSxBQUFZOztBQUMzRCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0TUFHTCxBO1lBQVEsQSxBQUNBO0FBREEsQUFDTixhQU9GLEEsZUFBZSxZQUFBO2FBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBQSxBQUFLLE1BQWxDLEFBQU0sQUFBYyxBQUFvQjtBLGEsQUFDdkQsY0FBYyxZQUFBO2FBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxNQUF0QixBQUFNLEFBQWMsQUFBUTtBOzs7Ozs2QkFFakM7VUFBQTs7bUJBQzhCLEtBRDlCLEFBQ21DO1VBRG5DLEFBQ0Msa0JBREQsQUFDQztVQURELEFBQ1csZUFEWCxBQUNXO1VBRFgsQUFDa0IsaUJBRGxCLEFBQ2tCLEFBQ3pCOztVQUFNLG1DQUNKLEFBQUM7MkNBRUcsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDOztzQkFBRDt3QkFITixBQUVJLEFBQ0UsQUFHSjtBQUhJO0FBQUE7c0JBR1UsRUFBRSxZQUFGLEFBQWMsU0FBUyxVQU52QyxBQU1nQixBQUFpQyxBQUMvQztzQkFBYyxFQUFFLFlBQUYsQUFBYyxTQUFTLFVBUHZDLEFBT2dCLEFBQWlDOztvQkFQakQ7c0JBQUEsQUFTRTtBQVRGO0FBQ0UsT0FERixrQkFTRSxBQUFDLHNDQUFTLGFBQVYsQUFBc0I7b0JBQXRCO3NCQVRGLEFBU0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsc0NBQVMsYUFBVixBQUFzQjtvQkFBdEI7c0JBVkYsQUFVRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxzQ0FBUyxhQUFWLEFBQXNCO29CQUF0QjtzQkFaSixBQUNFLEFBV0UsQUFJSjtBQUpJOzs7NkJBS0YsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixrREFBOUI7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQVE7QUFBUjtBQUFBLFNBSEosQUFDRSxBQUVFLEFBRUYseUJBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLG9DQUFPLE9BQVIsQUFBZSxLQUFLLE1BQU0sS0FBQSxBQUFLLE1BQS9CLEFBQXFDO29CQUFyQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUNRLFdBRFQsQUFDb0IsQUFDbEI7dUJBQWUsRUFBRSxTQUZuQixBQUVpQixBQUFXLEFBQzFCO3lCQUhGLEFBR21CLEFBQ2pCOzBDQUNFLEFBQUMsd0NBQVcsU0FBUyxLQUFyQixBQUEwQjtzQkFBMUI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyw2Q0FBYyxPQUFmLEFBQXFCO3NCQUFyQjt3QkFOTixBQUtJLEFBQ0U7QUFBQTs7O29CQU5OO3NCQURGLEFBQ0UsQUFVQTtBQVZBO0FBQ0UsMEJBU0YsQUFBQyxzQ0FBUyxTQUFTLEtBQW5CLEFBQXdCLGFBQWEsMEJBQVUsQUFBQzs7c0JBQUQ7d0JBQS9DLEFBQStDO0FBQUE7QUFBQSxTQUFBO29CQUEvQztzQkFBQTtBQUFBO1NBWEYsQUFXRSxBQUdBLG1DQUFBLEFBQUMsc0NBQVMsU0FBUyxLQUFuQixBQUF3QixhQUFhLDBCQUFVLEFBQUM7O3NCQUFEO3dCQUEvQyxBQUErQztBQUFBO0FBQUEsU0FBQTtvQkFBL0M7c0JBQUE7QUFBQTtTQWZKLEFBQ0UsQUFjRSxBQUlGLHVDQUFBLEFBQUM7ZUFBRCxBQUNTLEFBQ1A7MENBQWtCLEFBQUMsd0NBQVcsT0FBWixBQUFrQjtzQkFBbEI7d0JBRnBCLEFBRW9CO0FBQUE7U0FBQTtBQURsQixpRkFERixBQUdvQixnR0FDSyxLQUp6QixBQUk4QjtrQkFKOUI7b0JBQUE7QUFBQSxVQW5CRixBQXlCRSx3Q0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQTBCO0FBQTFCO0FBQUEsU0EvQk4sQUFLRSxBQUNFLEFBeUJFO2lCQS9CTjthQURGLEFBQ0UsQUFzREg7QUF0REc7Ozs7O0EsQUEvQnVCOztPQUtwQixBO1NBQ0Usb0JBRFUsQUFDQSxBQUNqQjtZQUFVLG9CQUZPLEFBRUcsQTtBQUZILEFBQ2pCIiwiZmlsZSI6IlBhZ2VXcmFwcGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc3RpYW4vRG9jdW1lbnRzL3Rlc3QvbmV4dCJ9