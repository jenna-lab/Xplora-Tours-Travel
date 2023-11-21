CREATE PROCEDURE deleteBooking
    @booking_id VARCHAR(255)
AS
BEGIN
    DELETE FROM Booking
    WHERE booking_id = @booking_id;
END;