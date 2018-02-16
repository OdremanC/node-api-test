const Joi = require('joi');

module.exports = {
  body: {
    albumTitle: Joi.string().required(),
    portada: Joi.string().required(),
    photos: Joi.string().required()
  }
};