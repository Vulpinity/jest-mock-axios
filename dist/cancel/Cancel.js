"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Cancel = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Based of https://github.com/axios/axios
 * Copyright (c) 2014-present Matt Zabriskie
 */
var Cancel =
/*#__PURE__*/
function () {
  function Cancel() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Cancel";

    _classCallCheck(this, Cancel);

    this.message = message;
  }

  _createClass(Cancel, [{
    key: "toString",
    value: function toString() {
      return this.message;
    }
  }]);

  return Cancel;
}();

exports.Cancel = Cancel;
Cancel.prototype.__CANCEL__ = true;
var _default = Cancel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jYW5jZWwvQ2FuY2VsLnRzIl0sIm5hbWVzIjpbIkNhbmNlbCIsIm1lc3NhZ2UiLCJwcm90b3R5cGUiLCJfX0NBTkNFTF9fIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFJYUEsTTs7O0FBR1gsb0JBQXVDO0FBQUEsUUFBcEJDLE9BQW9CLHVFQUFWLFFBQVU7O0FBQUE7O0FBQUE7QUFBRTs7OzsrQkFFdkI7QUFDaEIsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7Ozs7Ozs7QUFHSEQsTUFBTSxDQUFDRSxTQUFQLENBQWlCQyxVQUFqQixHQUE4QixJQUE5QjtlQUVlSCxNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYXNlZCBvZiBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3NcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50IE1hdHQgWmFicmlza2llXG4gKi9cbmV4cG9ydCBjbGFzcyBDYW5jZWwge1xuICBwdWJsaWMgX19DQU5DRUxfXzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZSA9IFwiQ2FuY2VsXCIpIHt9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cbn1cblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsO1xuIl19