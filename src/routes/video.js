'use strict';

const VideoPreprocess = require('./../mixins/video-preprocess');
const Image = require('./image');

/**
 * Route that converts a video url, passed inside the request param, to an image
 * @class
 * @extends Route
 * @mixes VideoPreprocess
 */
class Video extends VideoPreprocess(Image) {
  /**
   *
   * @param {Config} conf
   * @param {string} [method='GET']
   * @param {string} [path='/video/{profile}/{url}']
   * @param {string} [description='Profile video conversion']
     */
  constructor(conf, method = 'GET', path = '/video/{profile}/{url}', description = 'Profile video conversion') {
    super(conf, method, path, description);
  }
}

module.exports = Video;
