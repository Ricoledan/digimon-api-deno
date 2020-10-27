-- create statement
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
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ 
);

-- functions
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_deleted_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.deleted_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- triggers
CREATE TRIGGER set_updated_at
BEFORE UPDATE
ON digimon
FOR EACH ROW
EXECUTE PROCEDURE set_updated_at();