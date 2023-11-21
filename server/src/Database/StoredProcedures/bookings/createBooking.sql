CREATE PROCEDURE createBooking
    @booking_id VARCHAR(255),
    @tour_id VARCHAR(255),
    @user_id VARCHAR(255),
    @count INT,
    @total_price INT
AS
BEGIN
    INSERT INTO Booking (booking_id, tour_id, user_id, count, total_price)
    VALUES (@booking_id, @tour_id, @user_id, @count, @total_price);
END;
