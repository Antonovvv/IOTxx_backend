'use strict';

const Service = require('egg').Service;

class DeviceService extends Service {
  async create(params) {
    const { ctx } = this;
    const { deviceName, owner } = params;

    try {
      const device = await ctx.model.Device.create({
        name: deviceName,
        owner,
      });
      ctx.logger.info(device);
      
      return { status: 201, msg: 'device created' };
    } catch (e) {
      ctx.logger.error(e);
      return { status: 500, err: 'create failed' };
    }
    
  }
}