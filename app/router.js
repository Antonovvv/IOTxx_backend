'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.db.index);
  router.resources('devices', '/api/devices', controller.device);
  router.resources('records', '/api/records', controller.record);
};
