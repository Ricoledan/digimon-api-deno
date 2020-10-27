-- create
DROP TABLE digimon;
CREATE TABLE IF NOT EXISTS digimon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    attribute VARCHAR(8) NOT NULL,
    field VARCHAR(100),
    group_theme VARCHAR(25),
    abilities JSONB,
    profile VARCHAR(255),
    profile_img VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- insert
INSERT INTO digimon(name, level, type, attribute, field, abilities, profile, profile_img)
VALUES ('agumon', 'child', 'reptile', 'vaccine', 'Metal Empire, Nature Spirits, Virus Busters, Unknown', '{ "name": "Baby Flame", "description": "Releases a stream of fire from its mouth" }', 'A Reptile Digimon which has grown and become able to walk on two legs', 'https://digimon.net/cimages/digimon/agumon.jpg');

-- update
UPDATE
   digimon 
SET
   name = ''
WHERE
   name = ''

-- delete
DROP TABLE digimon;