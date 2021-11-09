create database trip;

use trip;

create table `user`(
  `id` int not null auto_increment,
  `username` varchar(20) default null comment "用户名",
  `password` varchar(30) default null comment "密码",
  `avator` text comment "头像",
  `phone` varchar(20) default null comment "电话",
  `sign` varchar(300) default null comment "签名" ,
  `createTime` timestamp ,
  primary key(`id`)

)engine=InnoDB auto_increment=1 default charset=utf8 comment= "用户表";