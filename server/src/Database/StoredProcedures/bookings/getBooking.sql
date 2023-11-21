CREATE PROCEDURE getBooking
    @booking_id VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Booking
    WHERE booking_id = @booking_id;
END;
