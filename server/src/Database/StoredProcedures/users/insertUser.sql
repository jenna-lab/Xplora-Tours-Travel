CREATE PROCEDURE insertUser(
    @id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @password VARCHAR(200)
)
AS
BEGIN
    DECLARE @role VARCHAR(200);
    IF NOT EXISTS (SELECT 1 FROM UsersTable WHERE role = 'admin')
    BEGIN
        SET @role = 'admin';
    END
    ELSE
    BEGIN
        SET @role = 'user';
    END
    INSERT INTO UsersTable(id, name, email,  password, role)
    VALUES(@id, @name, @email, @password, @role)
END;
 
DELETE FROM UsersTable;
DROP PROCEDURE IF EXISTS insertUser;
SELECT * FROM UsersTable;

