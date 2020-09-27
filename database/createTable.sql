CREATE TABLE IF NOT EXISTS digimon (
    id SERIAL PRIMARY KEY,
    type VARCHAR(7) NOT NULL,
    level VARCHAR(3) NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    image_url VARCHAR(255),
    added VARCHAR(255) NOT NULL,
    updated VARCHAR(255),
    deleted VARCHAR(255)
)