CREATE PROCEDURE updateBooking
    @booking_id VARCHAR(255),
    @tour_id VARCHAR(255),
    @user_id VARCHAR(255),
    @count INT,
    @total_price INT,
AS
BEGIN
    UPDATE Booking
    SET
        tour_id = @tour_id,
        user_id = @user_id,
        count = @count,
        total_price = @total_price,
    WHERE booking_id = @booking_id;
END;