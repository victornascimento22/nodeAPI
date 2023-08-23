import Joi from 'joi';

const sessionInfoSchema = object({
  SessionId: Joi.string().optional(),
  UsnCod: Joi.number().integer().optional(),
  SessionLastAccessedTime: Joi.number().integer().optional(),
  Username: Joi.string().optional(),
  RemoteAddress: Joi.string().optional(),
  MachineID: Joi.string().optional(),
  MachineName: Joi.string().optional(),
  MachineUser: Joi.string().optional()
});

const loginErrorResponseSchema = object({
  Type: Joi.string().optional(),
  Sessions: Joi.array().items(sessionInfoSchema).optional()
});

export default loginErrorResponseSchema;