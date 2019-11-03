import Route = require("../model/route");
import ImageStream = require("./../mixins/image-stream");
import ProfileOperation = require("./../mixins/profile-operation");
import Convert = require("./../mixins/convert");
import Server = require("flamingo/src/model/server");
import FlamingoOperation = require("flamingo/src/model/flamingo-operation");
import Config = require("flamingo/config");

/**
 * Route that converts an image url, passed inside the request param, to an image
 * @class
 * @mixes Convert
 * @mixes ProfileOperation
 * @mixes ImageStream
 * @extends Route
 */
class Image extends ImageStream(ProfileOperation(Convert(Route))) {
  /**
   *
   * @param {Config} conf
   * @param {string} [method='GET']
   * @param {string} [path='/image/{profile}/{url}']
   * @param {string} [description='Profile image conversion']
   */
  constructor(
    conf,
    method = "GET",
    path = "/image/{profile}/{url}",
    description = "Profile image conversion"
  ) {
    super(conf, method, path, description);
  }
}

export = Image;
