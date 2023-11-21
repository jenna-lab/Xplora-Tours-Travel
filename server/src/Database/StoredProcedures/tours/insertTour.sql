CREATE PROCEDURE inserttour
  @tour_id VARCHAR(200),
  @title VARCHAR(200),
  @description VARCHAR(200),
  @destination VARCHAR(200),
  @price DECIMAL(10, 2),
  @imageUrl VARCHAR(255),
  @start_date DATE, -- Add start_date parameter
  @end_date DATE    -- Add end_date parameter
AS
BEGIN
  INSERT INTO ToursTable (
    tour_id, title, description, destination, price, imageUrl, start_date, end_date
  ) VALUES (
    @tour_id, @title, @description, @destination, @price, @imageUrl, @start_date, @end_date
  );
END;