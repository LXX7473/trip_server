/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636084311779_7446';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'lizai',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'trip',
    username: 'root',
    password: 'Lixiang326.',
    // 配置数据库时间为东八区北京时间
    timezone: '+08:00',
    define: {
      freezeTableName: true, // 强制表名称等于模型名称
      timestamps: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
