### Data Types

- Data type of a column defines what value the column can store in the table.
- Defined while creating tables in database.
- Data types mainly classified into three categories + most used
  - String:char,varchar,text etc...
  - Numeric:int,float,double,decimal,bool etc...
  - Date and time:date,datetime etc...

### Primary and Foreign keys:

> Primary keys:

- A column or set of columns that uniquely identify a row in a table.
- A table can have only one primary key & the value cant be null.
- Primary key is used to establish relationships between tables.
- Primary key is used to enforce rules on the table.

> Foreign keys:

- A column or set of columns in one table that refers to the primary key in another table.
- A table can have multiple foreign keys or Duplicate values & it could null also.
- Foreign key is used to establish relationships between tables.
- Foreign key is used to enforce rules on the table.

### Constraints:

- Constraints are used to specify rules for the data in a table.
- Constraints are used to limit the type of data that can go into a table.

---

## SQL-Query's

`CREATE DATABASE databaseName`

```
CREATE TABLE customer
(
    "ID" int8 PRIMARY KEY,
    "Name" varchar(50) NOT NULL,
    "Age" int NOT NULL,
    "City" char(50),
    "Salary" numeric
);
```

```
SELECT * FROM customer
ORDER BY "ID" ASC
```

```
SELECT * FROM public.customer
ORDER BY "ID" ASC LIMIT 100
```