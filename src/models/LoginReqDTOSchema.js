import Joi from 'joi';
import webAuthDetailsSchema from '/home/loadt/node/src/models/WebAuthenticationDetailsSchema.js';

const loginReqDTOSchema = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
  mfaToken: Joi.string().allow(null).optional(),
  sessionToKill: Joi.string().allow(null).optional(),
  newPassword: Joi.string().allow(null).optional(),
  machineID: Joi.string().allow(null).optional(),
  machineName: Joi.string().allow(null).optional(),
  machineUser: Joi.string().allow(null).optional(),
  killOtherSessions: Joi.boolean().optional(),
  authDetails: webAuthDetailsSchema.allow(null).optional(),
  vldSistema: Joi.string().max(2).valid('NAO', 'SIM').optional(),
  deviceToken: Joi.string().allow(null).optional(),
  notificationToken: Joi.string().allow(null).optional(),
  oauthType: Joi.string().allow(null).optional(),
  oauthCode: Joi.string().allow(null).optional(),
  certs: Joi.array().items(Joi.string()).optional(),
});

export default loginReqDTOSchema;
