SET NAMES UTF8;
DROP DATABASE IF EXISTS fk;
CREATE DATABASE fk CHARSET=UTF8;
USE fk;

/**1.信息表**/
CREATE TABLE fk_site_info(
	site_name varchar(28),
	logo varchar(28),
	copyright varchar(64)
);

/**2.导航表**/
CREATE TABLE fk_nav_item(
	name varchar(16),
	url varchar(32),
	title varchar(32)
);

/**3.用户信息**/
CREATE TABLE fk_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname varchar(32),
	upwd varchar(32),
	phone varchar(11),
	user_name varchar(16),
	avatar varchar(128),
	gender INT 
); 

/**4.收货地址信息**/
CREATE TABLE fk_receiver_address(
	aid INT PRIMARY KEY,
	user_id INT,
	receiver varchar(16),#收货人姓名
	province varchar(16),
	city varchar(16),
	county varchar(16),
	address varchar(16),
	cellphone varchar(16),
	fixedphone varchar(16),
	postcode char(6),
	is_default BOOLEAN  #是否为当前默认地址

);

/**5.首页轮播图信息**/
CREATE TABLE fk_carousel_item(
	cid INT PRIMARY KEY,
	url varchar(128),
	img varchar(128),
	title varchar(64)
);

/**6.首页最新消息**/
CREATE TABLE fk_news(
	pid INT PRIMARY KEY,
	url varchar(64),
	title varchar(64)
);

/**7.首页热销产品**/
 CREATE TABLE fk_hot_product(
 	pid INT PRIMARY KEY,
 	url varchar(64),
 	title varchar(64)
 );

 /**8.购物车条目**/
 CREATE TABLE fk_shoppingcart_item(
 	sid INT PRIMARY KEY,
 	user_id INT,  #用户编号
 	product_id INT, #商品编号
 	count INT,   #购买数量
 	is_checked BOOLEAN #是否已勾选，确定购买
 );

 /**9.用户订单**/
CREATE TABLE fk_order(
	aid INT PRIMARY KEY,
	user_id INT,
	address_id INT,
	status INT,          #订单状态
	order_time BIGINT,   #下单时间
	pay_time BIGINT,     #付款时间
	deliver_time BIGINT, #发货时间
	received_time BIGINT #签收时间
);



/**数据导入**/
/**1.信息表-导入**/
INSERT INTO fk_site_info VALUES
('厦门美味皇食品有限公司',NULL,'厦门美味皇食品有限公司版权所欲');

/**2.导航表-**/
INSERT INTO fk_nav_item VALUES
('关于美味皇',NULL,NULL),
('最新消息',NULL,NULL),
('线上购物',NULL,NULL),
('加盟专区',NULL,NULL),
('联系我们',NULL,NULL);

/**3.用户信息**/

/**4.收货地址信息**/
