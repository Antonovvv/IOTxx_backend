'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const dataPath = 'data/iot.json';

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let data, parsedData;
    // let fd = fs.openSync(dataPath, 'w+');
    try {
      data = fs.readFileSync(dataPath);
      parsedData = JSON.parse(data);
      ctx.body = parsedData;
    } catch(e) {
      if(e.code === 'ENOENT') {
        let initData = JSON.stringify({
          devices: [],
        });
        fs.writeFileSync(dataPath, initData);
        ctx.body = 'init';
      } else {
        throw e;
      }
    }
  }

  async addDevices() {
    
  }
}

module.exports = HomeController;
