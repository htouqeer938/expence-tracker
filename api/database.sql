CREATE DATABASE expense_tracker;

CREATE TABLE
    todo(todo_id SERIAL PRIMARY KEY, description VARCHAR(255));

CREATE TABLE
    transactions(
        transaction_id SERIAL PRIMARY KEY,
        transaction_type_id INT,
        transaction_type VARCHAR(255),
        transaction_name VARCHAR(255),
        transaction_desc VARCHAR(255),
        transaction_amount DECIMAL(18, 2),
        transaction_date DATE,
        user_id INT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP is_deleted BIGINT
    );

CREATE TABLE
    IF NOT EXISTS public.transaction_type (
        id INTEGER NOT NULL DEFAULT nextval('transaction_type_id_seq':: regclass),
        transaction_type CHARACTER VARYING(255) COLLATE pg_catalog."default",
        CONSTRAINT transaction_type_pkey PRIMARY KEY (id)
    ) TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS public.transaction_type OWNER TO postgres;

CREATE TABLE
    users(
        user_id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        token VARCHAR(255),
        recovery_code VARCHAR(255),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )