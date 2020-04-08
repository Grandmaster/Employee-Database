drop database if exists employees_db;
create database employees_db;
use employees_db;

create table department(
    id integer(11) auto_increment not null,
    name varchar(30),
    primary key (id)
);

create table role(
    id integer(11) auto_increment not null,
    title varchar(30),
    salary decimal(10, 4),
    department_id integer(11) not null,
    primary key(id)
);

create table employee(
    id integer auto_increment not null,
    first_name varchar(30),
    last_name varchar(30),
    role_id integer(11),
    manager_id integer(11) default null,
    primary key (id)
);