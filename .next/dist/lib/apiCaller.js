'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callApi = exports.stringtifyRequestBody = exports.REQUEST_PUT = exports.REQUEST_DELETE = exports.REQUEST_POST = exports.REQUEST_GET = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_GET = exports.REQUEST_GET = 'get';
var REQUEST_POST = exports.REQUEST_POST = 'post';
var REQUEST_DELETE = exports.REQUEST_DELETE = 'delete';
var REQUEST_PUT = exports.REQUEST_PUT = 'put';

var stringtifyRequestBody = exports.stringtifyRequestBody = function stringtifyRequestBody(body) {
  var ar = [];
  (0, _keys2.default)(body).forEach(function (propName) {
    ar.push(propName + '=' + body[propName]);
  });
  return ar.length ? '?' + ar.join('&') : '';
};

var callApi = exports.callApi = function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : REQUEST_GET;
  var body = arguments[2];
  var headers = arguments[3];
  var isJsonResponse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var reqParam = method === REQUEST_GET && body ? stringtifyRequestBody(body) : '';
  var fetchData = { method: method };
  if (method === REQUEST_POST) {
    if (body) {
      fetchData = (0, _extends3.default)({}, fetchData, { body: body });
    }
  }
  if (headers) {
    fetchData = (0, _extends3.default)({}, fetchData, { headers: headers });
  }
  return (0, _isomorphicFetch2.default)('' + endpoint + reqParam, fetchData).then(function (response) {
    if (isJsonResponse) {
      return response.json();
    }
    return response;
  }).then(function (response) {
    return response;
  }, function (error) {
    return { hasError: true, errors: error };
  });
};

exports.default = callApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcGlDYWxsZXIuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJSRVFVRVNUX0dFVCIsIlJFUVVFU1RfUE9TVCIsIlJFUVVFU1RfREVMRVRFIiwiUkVRVUVTVF9QVVQiLCJzdHJpbmd0aWZ5UmVxdWVzdEJvZHkiLCJhciIsImJvZHkiLCJmb3JFYWNoIiwicHVzaCIsInByb3BOYW1lIiwibGVuZ3RoIiwiam9pbiIsImNhbGxBcGkiLCJlbmRwb2ludCIsIm1ldGhvZCIsImhlYWRlcnMiLCJpc0pzb25SZXNwb25zZSIsInJlcVBhcmFtIiwiZmV0Y2hEYXRhIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImhhc0Vycm9yIiwiZXJyb3JzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDUDs7Ozs7O0FBQU8sSUFBTSxvQ0FBTixBQUFvQixBQUMzQjtBQUFPLElBQU0sc0NBQU4sQUFBcUIsQUFDNUI7QUFBTyxJQUFNLDBDQUFOLEFBQXVCLEFBQzlCO0FBQU8sSUFBTSxvQ0FBTixBQUFvQixBQUUzQjs7QUFBTyxJQUFNLHdEQUF3QixTQUF4QixBQUF3Qiw0QkFBUSxBQUMzQztNQUFNLEtBQU4sQUFBVyxBQUNYO3NCQUFBLEFBQVksTUFBWixBQUFrQixRQUFRLG9CQUFZLEFBQ3BDO09BQUEsQUFBRyxLQUFILEFBQVcsaUJBQVksS0FBdkIsQUFBdUIsQUFBSyxBQUM3QjtBQUZELEFBR0E7U0FBTyxHQUFBLEFBQUcsZUFBYSxHQUFBLEFBQUcsS0FBbkIsQUFBZ0IsQUFBUSxPQUEvQixBQUF3QyxBQUN6QztBQU5NLEFBUVA7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLFVBQXlFO01BQS9ELEFBQStELDZFQUF0RCxBQUFzRDtNQUF6QyxBQUF5QyxpQkFBQTtNQUFuQyxBQUFtQyxvQkFBQTtNQUExQixBQUEwQixxRkFBVCxBQUFTLEFBQy9GOztNQUFNLFdBQVcsV0FBQSxBQUFXLGVBQVgsQUFBMEIsT0FBTyxzQkFBakMsQUFBaUMsQUFBc0IsUUFBeEUsQUFBZ0YsQUFDaEY7TUFBSSxZQUFZLEVBQUUsUUFBbEIsQUFBZ0IsQUFDaEI7TUFBSSxXQUFKLEFBQWUsY0FBYyxBQUMzQjtRQUFBLEFBQUksTUFBTSxBQUNSOzZDQUFBLEFBQWlCLGFBQVcsTUFBNUIsQUFDRDtBQUNGO0FBQ0Q7TUFBQSxBQUFJLFNBQVMsQUFDWDsyQ0FBQSxBQUFpQixhQUFXLFNBQTVCLEFBQ0Q7QUFDRDs2Q0FBTyxBQUFTLFdBQVQsQUFBb0IsVUFBcEIsQUFBZ0MsV0FBaEMsQUFDSixLQUFLLG9CQUFZLEFBQ2hCO1FBQUEsQUFBSSxnQkFBZ0IsQUFDbEI7YUFBTyxTQUFQLEFBQU8sQUFBUyxBQUNqQjtBQUNEO1dBQUEsQUFBTyxBQUNSO0FBTkksR0FBQSxFQUFBLEFBT0osS0FDQyxvQkFBQTtXQUFBLEFBQVk7QUFSVCxLQVNILGlCQUFTLEFBQ1A7V0FBTyxFQUFFLFVBQUYsQUFBWSxNQUFNLFFBQXpCLEFBQU8sQUFBMEIsQUFDbEM7QUFYTCxBQUFPLEFBYVI7QUF4Qk0sQUEwQlA7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXBpQ2FsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc3RpYW4vRG9jdW1lbnRzL3Rlc3QvbmV4dCJ9