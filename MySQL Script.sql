create database bamazon;

use bamazon;

create table products(
	item_id int not null,
    product_name varchar(100) not null,
    department_name varchar(50) not null,
    price decimal(10,2) not null,
    stock_quantity int not null,
    primary key (item_id)
);

use products;

insert into products(product_name, department_name, price, stock_quantity)
value("Bamazon Echoing","Electronics",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Avengers Funko Pop","Toys",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Kong Ball","Pet Supplies",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Bamazon IceStick","Electronics",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Nutrio Dog Food","Pet Supplies",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Cards Against Humanity","Games",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Starcraft 2: Legacy of the Void","Games",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("LEGO'S Bionics","Toys",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Toilet Paper","Home Goods",10,100);

insert into products(product_name, department_name, price, stock_quantity)
value("Clorox Wipes","Home Goods",10,100);