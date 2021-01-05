'use strict';

const Controller = require('egg').Controller;

class RecordController extends Controller {
  async index() {
    const { ctx } = this;
     
    const records = await ctx.model.Record.findAll();

    ctx.body = records;
  }
  
  async show() {
    const { ctx } = this;

    // const records = await ctx.model.Record.findByPk(ctx.params.id);
    const points = await ctx.model.Point.findAll({
      where: {
        record_id: ctx.params.id,
      },
    });

    ctx.body = points;
  }

  async create() {
    const { ctx } = this;
    
    // console.log(ctx.request.body);
    const res = await ctx.service.record.create(ctx.request.body);

    ctx.status = res.status;
    ctx.body = {
      success: res.success,
      msg: res.msg || res.err,
    };
  }
}

module.exports = RecordController;