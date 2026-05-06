const isString = require('lodash/isString');

/**
 * Checks whether a given url or path is a local file
 * @param {string} url the url or path to the file
 * @returns {boolean} true if the given url is a remote location or data
 */
function isRemoteUrl(url) {
  return isString(url) && /^ftp:|^https?:|^gs:|^s3:|^data:([\w-.]+\/[\w-.]+(\+[\w-.]+)?)?(;[\w-.]+=[\w-.]+)*;base64,([a-zA-Z0-9\/+\n=]+)$/.test(url);
}

module.exports = isRemoteUrl;
