"use strict";

var _testUtils = require("@vue/test-utils");

var _OutletSale = _interopRequireDefault(require("./OutletSale.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('OutletSale.vue', function () {
  it('should display all books that are on sale', function () {
    var wrapper = (0, _testUtils.shallowMount)(_OutletSale["default"]);
  });
});