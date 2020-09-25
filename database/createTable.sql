CREATE TABLE IF NOT EXISTS digimon (
    id SERIAL PRIMARY KEY,
    type VARCHAR(7) NOT NULL,
    level VARCHAR(3) NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    added TIMESTAMP NOT NULL,
    updated TIMESTAMP,
    deleted TIMESTAMP
)