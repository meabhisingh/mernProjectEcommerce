const api = require('./api');
const { isEmpty, isNumber } = require('../utils');

const Search = class Search {
  constructor() {
    this.query_hash = {
      sort_by: [],
      aggregate: [],
      with_field: []
    };
  }

  static instance() {
    return new Search();
  }

  static expression(value) {
    return this.instance().expression(value);
  }

  static max_results(value) {
    return this.instance().max_results(value);
  }

  static next_cursor(value) {
    return this.instance().next_cursor(value);
  }

  static aggregate(value) {
    return this.instance().aggregate(value);
  }

  static with_field(value) {
    return this.instance().with_field(value);
  }

  static sort_by(field_name, dir = 'asc') {
    return this.instance().sort_by(field_name, dir);
  }

  expression(value) {
    this.query_hash.expression = value;
    return this;
  }

  max_results(value) {
    this.query_hash.max_results = value;
    return this;
  }

  next_cursor(value) {
    this.query_hash.next_cursor = value;
    return this;
  }

  aggregate(value) {
    this.query_hash.aggregate.push(value);
    return this;
  }

  with_field(value) {
    this.query_hash.with_field.push(value);
    return this;
  }

  sort_by(field_name, dir = "desc") {
    let sort_bucket;
    sort_bucket = {};
    sort_bucket[field_name] = dir;
    this.query_hash.sort_by.push(sort_bucket);
    return this;
  }

  to_query() {
    Object.keys(this.query_hash).forEach((k) => {
      let v = this.query_hash[k];
      if (!isNumber(v) && isEmpty(v)) {
        delete this.query_hash[k];
      }
    });
    return this.query_hash;
  }

  execute(options, callback) {
    if (callback === null) {
      callback = options;
    }
    options = options || {};
    return api.search(this.to_query(), options, callback);
  }
};

module.exports = Search;
