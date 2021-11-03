import { SchemaOptions } from "celebrate";
import Joi from "joi";

const newBirthdayBodyValidation = Joi.object().keys({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(2).required(),
  birthday: Joi.string().required(),
});

export default { body: newBirthdayBodyValidation } as SchemaOptions;
