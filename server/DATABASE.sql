CREATE DATABASE todo;

CREATE table todo(
    todos_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL 
)
