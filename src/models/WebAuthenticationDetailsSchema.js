import Joi from 'joi';

const webAuthDetailsSchema = Joi.object({
  remoteAddress: Joi.string().allow(null).optional(),
  sessionId: Joi.string().allow(null).optional(),
});

export default webAuthDetailsSchema;

