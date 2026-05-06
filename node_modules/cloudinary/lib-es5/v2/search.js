'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = require('./api');

var _require = require('../utils'),
    isEmpty = _require.isEmpty,
    isNumber = _require.isNumber;

var Search = function () {
  function Search() {
    _classCallCheck(this, Search);

    this.query_hash = {
      sort_by: [],
      aggregate: [],
      with_field: []
    };
  }

  _createClass(Search, [{
    key: 'expression',
    value: function expression(value) {
      this.query_hash.expression = value;
      return this;
    }
  }, {
    key: 'max_results',
    value: function max_results(value) {
      this.query_hash.max_results = value;
      return this;
    }
  }, {
    key: 'next_cursor',
    value: function next_cursor(value) {
      this.query_hash.next_cursor = value;
      return this;
    }
  }, {
    key: 'aggregate',
    value: function aggregate(value) {
      this.query_hash.aggregate.push(value);
      return this;
    }
  }, {
    key: 'with_field',
    value: function with_field(value) {
      this.query_hash.with_field.push(value);
      return this;
    }
  }, {
    key: 'sort_by',
    value: function sort_by(field_name) {
      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "desc";

      var sort_bucket = void 0;
      sort_bucket = {};
      sort_bucket[field_name] = dir;
      this.query_hash.sort_by.push(sort_bucket);
      return this;
    }
  }, {
    key: 'to_query',
    value: function to_query() {
      var _this = this;

      Object.keys(this.query_hash).forEach(function (k) {
        var v = _this.query_hash[k];
        if (!isNumber(v) && isEmpty(v)) {
          delete _this.query_hash[k];
        }
      });
      return this.query_hash;
    }
  }, {
    key: 'execute',
    value: function execute(options, callback) {
      if (callback === null) {
        callback = options;
      }
      options = options || {};
      return api.search(this.to_query(), options, callback);
    }
  }], [{
    key: 'instance',
    value: function instance() {
      return new Search();
    }
  }, {
    key: 'expression',
    value: function expression(value) {
      return this.instance().expression(value);
    }
  }, {
    key: 'max_results',
    value: function max_results(value) {
      return this.instance().max_results(value);
    }
  }, {
    key: 'next_cursor',
    value: function next_cursor(value) {
      return this.instance().next_cursor(value);
    }
  }, {
    key: 'aggregate',
    value: function aggregate(value) {
      return this.instance().aggregate(value);
    }
  }, {
    key: 'with_field',
    value: function with_field(value) {
      return this.instance().with_field(value);
    }
  }, {
    key: 'sort_by',
    value: function sort_by(field_name) {
      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

      return this.instance().sort_by(field_name, dir);
    }
  }]);

  return Search;
}();

module.exports = Search;