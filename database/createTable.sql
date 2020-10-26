CREATE TABLE IF NOT EXISTS digimon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    attribute VARCHAR(8) NOT NULL,
    field VARCHAR(20),
    group VARCHAR(25),
    profile VARCHAR(255),
    profile_img VARCHAR(100)
)