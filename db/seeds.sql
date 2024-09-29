INSERT INTO department (name)
VALUES
    ('Customer Support'),
    ('Sales'),
    ('Accounting'),

INSERT INTO role (title, salary, department_id)
VALUES
    ('Customer Support Manager', 85000, 1),
    ('Customer Support Specialist', 70000, 1),
    ('Regional Sales Lead', 85000, 2),
    ('Sales Representative', 70000, 2),
    ('Accountng Manager', 85000, 3),
    ('Accounting Specialist', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Dave', 'Wilson', 1, null),
    ('Stan', 'Chen', 2, 1),
    ('Mike', 'Scott', 3, null),
    ('James', 'Halp', 4, 2),
    ('Oscar', 'Martin', 5, null),
    ('Kevin', 'Malone', 6, 3);
