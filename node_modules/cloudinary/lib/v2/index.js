const v1 = require('../cloudinary');
const api = require('./api');
const uploader = require('./uploader');
const search = require('./search');

const v2 = {
  ...v1,
  api,
  uploader,
  search
};
module.exports = v2;
