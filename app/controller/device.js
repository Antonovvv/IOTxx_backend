'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi'
  }

  async create() {
    const { ctx } = this;

    console.log(ctx.request.body)
    const res = await ctx.service.device.create(ctx.request.body);

    ctx.status = res.status;
    ctx.body = {
      success: res.success,
      msg: res.msg || res.err,
    };
  }
}

module.exports = HomeController;
