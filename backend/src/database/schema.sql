CREATE DATABASE eldoradomovie;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
    email VARCHAR NOT NULL
    password VARCHAR NOT NULL

);

CREATE TABLE IF NOT EXISTS movies(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    poster VARCHAR,
    description VARCHAR,
    release_date VARCHAR,
    upload_date VARCHAR,
    users_id UUID,
    FOREIGN KEY (users_id) REFERENCES users(id)
);