

CREATE TABLE UsersTable( id VARCHAR(80), name VARCHAR(200),   email VARCHAR(200)  , password VARCHAR(200), role VARCHAR(200) DEFAULT 'user', status VARCHAR(80) DEFAULT 0)

CREATE TABLE ToursTable (
  tour_id VARCHAR(200) PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(200) NOT NULL,
  destination VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);


CREATE TABLE Booking (
    booking_id VARCHAR(255) PRIMARY KEY,
    tour_id VARCHAR(255),
    user_id VARCHAR(255),
    count INT,
    total_price INT,
);












