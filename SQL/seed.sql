use employees_db;

insert into department(name)
values ("Engineering"), ("Finance"), ("Sales"), ("R&D");

insert into role(title, salary, department_id)
values ("Lead Engineer", 10000, 1), ("Salesperson", 8000, 3), ("Accountant", 9000, 2);

insert into employee(first_name, last_name, role_id, manager_id)
values("Laura", "McTaggert", 1, 3), ("John", "Constantine", 2, null), ("Hank", "McCoy", 1, 1);
