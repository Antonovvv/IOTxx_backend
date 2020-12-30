'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    
  }

  async create() {
    const { ctx } = this;

    const res = await ctx.service.device.create(ctx.request.body);

    ctx.status = res.status;
    ctx.body = {
      success: res.success,
      msg: res.msg || res.err,
    };
  }
}

module.exports = HomeController;
