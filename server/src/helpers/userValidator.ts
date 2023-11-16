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
