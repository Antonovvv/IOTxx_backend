'use strict';

const Service = require('egg').Service;

class RecordService extends Service {
  async create(params) {
    const { ctx } = this;
    const { deviceId, startTime, points } = params;

    try {
      const record = await ctx.model.Device.create({
        device_id: deviceId,
        start_time: startTime,
      });
      for (let i = 0; i < points.length; ++i) {
        let point = points[i];
        await ctx.model.Point.create({
          time: point.time,
          type: point.type,
          data: JSON.stringify({ lat: point.lat, lng: point.lng }),
          record_id: record.record_id,
        });
      }
      ctx.logger.info(record);
      
      return { status: 201, msg: 'device created' };
    } catch (e) {
      ctx.logger.error(e);
      return { status: 500, err: 'create failed' };
    }
    
  }
}

module.exports = RecordService;