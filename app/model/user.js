'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(200),
    avator: TEXT('long'),
    phone: STRING(20),
    sign: STRING(300),
    createTime: DATE,
    UpdateTime: DATE,
  });

  return User;
};
