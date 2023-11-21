import Joi from "joi";

export const UserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
  name: Joi.string().required(),
});
export const UserSchema2 = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});

export const TourSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  destination: Joi.string().required(),
  price: Joi.number().required(),
  imageUrl: Joi.string().uri().required(),
  start_date:Joi.string().required(),
  end_date: Joi.string().required(),
});

export const UserSchema4 = Joi.object({
  name: Joi.string().required(),
  user_id: Joi.string().required(),
});
export const UserSchema5 = Joi.object({
  assigned_user_email: Joi.string().required(),
});
export const UserSchema6 = Joi.object({
  project_id: Joi.string().required(),
});

export const validateBooking = Joi.object().keys({
  // booking_id: Joi.string().min(8).required(),
  tour_id: Joi.string().min(8).required(),
  user_id: Joi.string().min(8).required(),
  count: Joi.number().min(1).required(),
  total_price: Joi.number().required(),
});

export const validateUpdateBooking = Joi.object().keys({
  booking_id: Joi.string().min(8).required(),
  tour_id: Joi.string().min(8).required(),
  user_id: Joi.string().min(8).required(),
  count: Joi.number().min(1).required(),
  total_price: Joi.number().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
});

export const validateBookingId = Joi.object().keys({
  booking_id: Joi.string().min(8).required(),
});

export const validateUserId = Joi.object().keys({
  user_id: Joi.string().min(8).required(),
});