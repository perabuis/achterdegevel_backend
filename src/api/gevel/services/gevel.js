'use strict';

/**
 * gevel service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gevel.gevel');
