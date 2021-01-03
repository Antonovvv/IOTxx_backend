'use strict';

const Controller = require('egg').Controller;

class RecordController extends Controller {
  async index() {
    
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