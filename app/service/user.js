'use strict';

const Service = require('egg').Service;


class UserServe extends Service {
  // 查用户
  async getUser(username) {
    const { ctx } = this;
    try {
      const result = await ctx.model.User.findOne({
        where: {
          username,
        },
      });
      console.log('result==>,',result)
      return result;
    } catch (err) {
      console.log('err==>', err);
      return null;
    }
  }

  async addUser(params) {
    try {
      const { ctx } = this;
      const res = await ctx.model.User.create(params);
      return res;
    } catch (e) {
      console.log('e--', e);
      return null;
    }
  }


}

module.exports = UserServe;
