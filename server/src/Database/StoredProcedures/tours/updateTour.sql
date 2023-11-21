CREATE or alter PROCEDURE UpdateTour
   @tour_id VARCHAR(200),
  @title VARCHAR(200),
  @description VARCHAR(200),
  @destination VARCHAR(200),
  @price DECIMAL(10, 2),
  @imageUrl VARCHAR(255),
  @start_date DATE, 
  @end_date DATE   
AS
BEGIN
    UPDATE ToursTable
    SET title= @title ,
  description=@description ,
  destination=@destination ,
  price =@price ,
  imageUrl=@imageUrl ,
  start_date=@start_date , 
  end_date=@end_date    
    WHERE tour_id = @tour_id;
END;