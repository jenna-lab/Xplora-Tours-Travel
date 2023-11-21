CREATE PROCEDURE deleteTour (@tour_id VARCHAR(80))
AS
BEGIN
IF EXISTS(SELECT * FROM toursTable WHERE tour_id=@tour_id)
BEGIN
DELETE FROM toursTable WHERE tour_id=@tour_id
END
END