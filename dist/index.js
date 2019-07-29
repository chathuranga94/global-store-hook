"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStore = exports.GlobalStoreProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var globalStore = function globalStore(init) {
  var store = {};
  Object.entries(init).forEach(function (prop) {
    var _prop = _slicedToArray(prop, 2),
        key = _prop[0],
        value = _prop[1];

    var hook = (0, _react.useState)(value);
    store[key] = {
      get: hook[0],
      set: hook[1]
    };
  });

  var get = function get(path) {
    try {
      return store[path].get;
    } catch (_unused) {
      console.log("Invalid path for get(): \"".concat(path, "\""));
    }
  };

  var set = function set(path, value) {
    try {
      return store[path].set(value);
    } catch (_unused2) {
      console.log("Invalid path for set(): \"".concat(path, "\""));
    }
  };

  return {
    get: get,
    set: set
  };
};

var AppContext = _react["default"].createContext({});

var GlobalStoreProvider = function GlobalStoreProvider(_ref) {
  var initValues = _ref.initValues,
      children = _ref.children;
  return _react["default"].createElement(AppContext.Provider, {
    value: globalStore(initValues)
  }, children);
};

exports.GlobalStoreProvider = GlobalStoreProvider;

var GlobalStore = function GlobalStore() {
  return (0, _react.useContext)(AppContext);
};

exports.GlobalStore = GlobalStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxTdG9yZSIsImluaXQiLCJzdG9yZSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwicHJvcCIsImtleSIsInZhbHVlIiwiaG9vayIsImdldCIsInNldCIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiQXBwQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbFN0b3JlUHJvdmlkZXIiLCJpbml0VmFsdWVzIiwiY2hpbGRyZW4iLCJHbG9iYWxTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFDQUMsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVILElBQWYsRUFBcUJJLE9BQXJCLENBQTZCLFVBQUFDLElBQUksRUFBSTtBQUFBLCtCQUNaQSxJQURZO0FBQUEsUUFDMUJDLEdBRDBCO0FBQUEsUUFDckJDLEtBRHFCOztBQUVqQyxRQUFNQyxJQUFJLEdBQUcscUJBQVNELEtBQVQsQ0FBYjtBQUNBTixJQUFBQSxLQUFLLENBQUNLLEdBQUQsQ0FBTCxHQUFhO0FBQUVHLE1BQUFBLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUQsQ0FBWDtBQUFnQkUsTUFBQUEsR0FBRyxFQUFFRixJQUFJLENBQUMsQ0FBRDtBQUF6QixLQUFiO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDRSxJQUFELEVBQVU7QUFDbEIsUUFBSTtBQUNBLGFBQU9WLEtBQUssQ0FBQ1UsSUFBRCxDQUFMLENBQVlGLEdBQW5CO0FBQ0gsS0FGRCxDQUVFLGdCQUFNO0FBQ0pHLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixxQ0FBd0NGLElBQXhDO0FBQ0g7QUFDSixHQU5EOztBQU9BLE1BQU1ELEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBT0osS0FBUCxFQUFpQjtBQUN6QixRQUFJO0FBQ0EsYUFBT04sS0FBSyxDQUFDVSxJQUFELENBQUwsQ0FBWUQsR0FBWixDQUFnQkgsS0FBaEIsQ0FBUDtBQUNILEtBRkQsQ0FFRSxpQkFBTTtBQUNKSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIscUNBQXdDRixJQUF4QztBQUNIO0FBQ0osR0FORDs7QUFPQSxTQUFPO0FBQUVGLElBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxJQUFBQSxHQUFHLEVBQUhBO0FBQVAsR0FBUDtBQUNILENBdkJEOztBQXlCQSxJQUFNSSxVQUFVLEdBQUdDLGtCQUFNQyxhQUFOLENBQW9CLEVBQXBCLENBQW5COztBQUVPLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxNQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSxTQUMvQixnQ0FBQyxVQUFELENBQVksUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBRXBCLFdBQVcsQ0FBQ21CLFVBQUQ7QUFBdkMsS0FDS0MsUUFETCxDQUQrQjtBQUFBLENBQTVCOzs7O0FBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNLHVCQUFXTixVQUFYLENBQU47QUFBQSxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBnbG9iYWxTdG9yZSA9IChpbml0KSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhpbml0KS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwcm9wO1xuICAgICAgICBjb25zdCBob29rID0gdXNlU3RhdGUodmFsdWUpO1xuICAgICAgICBzdG9yZVtrZXldID0geyBnZXQ6IGhvb2tbMF0sIHNldDogaG9va1sxXSB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXQgPSAocGF0aCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlW3BhdGhdLmdldDtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBwYXRoIGZvciBnZXQoKTogXCIke3BhdGh9XCJgKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNldCA9IChwYXRoLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlW3BhdGhdLnNldCh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgcGF0aCBmb3Igc2V0KCk6IFwiJHtwYXRofVwiYClcbiAgICAgICAgfVxuICAgIH0gXG4gICAgcmV0dXJuIHsgZ2V0LCBzZXQgfVxufVxuXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdG9yZVByb3ZpZGVyID0gKHsgaW5pdFZhbHVlcywgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWxTdG9yZShpbml0VmFsdWVzKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdG9yZSA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7Il19