CREATE TABLE task(
   task_id VARCHAR(50) ,
   task VARCHAR(250)  NOT NULL,
   starting_date DATETIME NOT NULL,
   ending_date VARCHAR(50)  NOT NULL,
   PRIMARY KEY(task_id)
);

CREATE TABLE person(
   person_id VARCHAR(50) ,
   name VARCHAR(250) ,
   first_name VARCHAR(250) ,
   email VARCHAR(250)  NOT NULL,
   password VARCHAR(250)  NOT NULL,
   user_id VARCHAR(50)  NOT NULL,
   PRIMARY KEY(person_id),
   UNIQUE(email),
   UNIQUE(user_id)
);

CREATE TABLE task_status(
   task_status_id VARCHAR(50) ,
   task_status VARCHAR(50)  NOT NULL,
   PRIMARY KEY(task_status_id),
   UNIQUE(task_status)
);

CREATE TABLE ingredient_type(
   ingredient_type_id VARCHAR(50) ,
   ingredient_type VARCHAR(250)  NOT NULL,
   PRIMARY KEY(ingredient_type_id),
   UNIQUE(ingredient_type)
);

CREATE TABLE quantity_type(
   quantity_type_id VARCHAR(50) ,
   quantity_type VARCHAR(50)  NOT NULL,
   PRIMARY KEY(quantity_type_id),
   UNIQUE(quantity_type)
);

CREATE TABLE meal_type(
   meal_type_id VARCHAR(50) ,
   meal_type VARCHAR(50)  NOT NULL,
   PRIMARY KEY(meal_type_id),
   UNIQUE(meal_type)
);

CREATE TABLE constraint_(
   constraint_id VARCHAR(50) ,
   constraint_ VARCHAR(50)  NOT NULL,
   limit DECIMAL(15,2)   NOT NULL,
   PRIMARY KEY(constraint_id)
);

CREATE TABLE expenditure_type(
   expenditure_type_id VARCHAR(50) ,
   expenditure_type VARCHAR(250)  NOT NULL,
   PRIMARY KEY(expenditure_type_id)
);

CREATE TABLE users(
   user_id VARCHAR(50) ,
   PRIMARY KEY(user_id)
);

CREATE TABLE meal(
   meal_id VARCHAR(50) ,
   meal_date DATE NOT NULL,
   meal_type_id VARCHAR(50)  NOT NULL,
   PRIMARY KEY(meal_id),
   FOREIGN KEY(meal_type_id) REFERENCES meal_type(meal_type_id)
);

CREATE TABLE ingredient(
   ingredient_id VARCHAR(50) ,
   ingredient VARCHAR(250)  NOT NULL,
   ingredient_type_id VARCHAR(50)  NOT NULL,
   PRIMARY KEY(ingredient_id),
   UNIQUE(ingredient),
   FOREIGN KEY(ingredient_type_id) REFERENCES ingredient_type(ingredient_type_id)
);

CREATE TABLE expenditure(
   expenditure_id VARCHAR(50) ,
   expenditure DECIMAL(15,2)   NOT NULL,
   context TEXT,
   expenditure_date DATETIME NOT NULL,
   expenditure_type_id VARCHAR(50)  NOT NULL,
   PRIMARY KEY(expenditure_id),
   FOREIGN KEY(expenditure_type_id) REFERENCES expenditure_type(expenditure_type_id)
);

CREATE TABLE task_person_status(
   task_id VARCHAR(50) ,
   person_id VARCHAR(50) ,
   task_status_id VARCHAR(50) ,
   updating_date DATETIME,
   PRIMARY KEY(task_id, person_id, task_status_id),
   FOREIGN KEY(task_id) REFERENCES task(task_id),
   FOREIGN KEY(person_id) REFERENCES person(person_id),
   FOREIGN KEY(task_status_id) REFERENCES task_status(task_status_id)
);

CREATE TABLE meal_ingredient(
   meal_id VARCHAR(50) ,
   ingredient_id VARCHAR(50) ,
   quantity DECIMAL(15,2)   NOT NULL,
   PRIMARY KEY(meal_id, ingredient_id),
   FOREIGN KEY(meal_id) REFERENCES meal(meal_id),
   FOREIGN KEY(ingredient_id) REFERENCES ingredient(ingredient_id)
);

CREATE TABLE ingredient_quantity_type(
   ingredient_id VARCHAR(50) ,
   quantity_type_id VARCHAR(50) ,
   price DECIMAL(15,2)  ,
   updating_date DATETIME,
   PRIMARY KEY(ingredient_id, quantity_type_id),
   FOREIGN KEY(ingredient_id) REFERENCES ingredient(ingredient_id),
   FOREIGN KEY(quantity_type_id) REFERENCES quantity_type(quantity_type_id)
);
