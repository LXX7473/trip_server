'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');
const day = require('dayjs')
class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    console.log('params----',params)
    const user =await ctx.service.user.getUser(params.username);
    console.log('user===>', user)
    if (user) {
      ctx.body = {
        status: 500,
        message: '用户已经存在',
      };
    }
    const result = await ctx.service.user.addUser({
      ...params,
      // 盐式加密
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });

    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        message: '用户添加失败',
      };
    }

  }
}

module.exports = UserController;
