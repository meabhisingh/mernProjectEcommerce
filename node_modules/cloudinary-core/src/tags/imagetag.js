/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */

import HtmlTag from './htmltag';

import url from '../url';
import {isEmpty, isString, merge} from "../util";
import {generateImageResponsiveAttributes} from "../util/srcsetUtils";

/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor ImageTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */
class ImageTag extends HtmlTag {
  constructor(publicId, options = {}) {
    super("img", publicId, options);
  }

  /** @override */
  closeTag() {
    return "";
  }

  /** @override */
  attributes() {
    var attr, options, srcAttribute;
    attr = super.attributes() || {};
    options = this.getOptions();
    let srcsetParam = this.getOption('srcset');
    let attributes = this.getOption('attributes') || {};

    let responsiveAttributes = {};
    if (isString(srcsetParam)) {
      responsiveAttributes.srcset = srcsetParam
    } else {
      responsiveAttributes = generateImageResponsiveAttributes(this.publicId, attributes, srcsetParam, options);
    }
    if(!isEmpty(responsiveAttributes)) {
      delete options.width;
      delete options.height;
    }

    merge(attr, responsiveAttributes);
    srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';
    if (attr[srcAttribute] == null) {
      attr[srcAttribute] = url(this.publicId, this.getOptions());
    }
    return attr;
  }

};

export default ImageTag;
