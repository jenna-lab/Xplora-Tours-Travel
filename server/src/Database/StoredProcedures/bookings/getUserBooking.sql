CREATE PROCEDURE getUserBooking
    @user_id VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Booking
    WHERE user_id = @user_id;
END;
