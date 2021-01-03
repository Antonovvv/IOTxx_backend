'use strict';

const Controller = require('egg').Controller;
const { Op } = require('sequelize');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const devices = await ctx.model.Device.findAll({
      where: {
        name: {
          [Op.not]: null,
        },
      }
    });

    // console.log(devices);
    ctx.body = devices;
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
