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

## PostgreSQL

```
CREATE DATABASE databaseName
```

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

```
CREATE TABLE public.cust
(
    custid integer NOT NULL,
    custname "char" NOT NULL,
    address character varying(150),
    sal numeric,
    PRIMARY KEY (custid)
);
```

```
INSERT INTO customer
(CustID, CustName, Age, City, Salary)
VALUES
(1, 'Sam', 26, 'Delhi', 9000),
(2, 'Ram', 19, 'Bangalore', 10000),
(3, 'Pam', 31, 'Kolkata', 11000),
(4, 'Jam', 42, 'Mumbai', 12000);
```

# SQLite

Some of the main differences between a SQL and NoSQL databases are:

NoSQL databases are usually non-relational, SQL databases are usually relational (we'll talk more about what this means later).
SQL databases usually have a defined schema, NoSQL databases usually have dynamic schema.
SQL databases are table-based, NoSQL databases have a variety of different storage methods, such as document, key-value, graph, wide-column, and more.

```
CREATE TABLE users (id INTEGER, name TEXT, age INTEGER, is_admin BOOLEAN);
INSERT into users (id, name, age, is_admin) values (1, 'John Doe', 27, false);
INSERT into users (id, name, age, is_admin) values (2, 'Sally Rae', 18, true);
```

```
 SELECT id from users;
 SELECT id, name from users;
 SELECT * from users;
```
