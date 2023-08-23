import { object, string, boolean, array } from 'joi';
import { webAuthDetailsSchema } from '/home/loadt/node/models/WebAuthenticationDetailsSchema';

const loginReqDTOSchema = object({
  username: string().max(50).required(),
  password: string().max(50).required(),
  mfaToken: string().allow(null).optional(),
  sessionToKill: string().allow(null).optional(),
  newPassword: string().allow(null).optional(),
  machineID: string().allow(null).optional(),
  machineName: string().allow(null).optional(),
  machineUser: string().allow(null).optional(),
  killOtherSessions: boolean().optional(),
  authDetails: webAuthDetailsSchema.allow(null).optional(),
  vldSistema: string().max(2).valid('NAO', 'SIM').optional(),
  deviceToken: string().allow(null).optional(),
  notificationToken: string().allow(null).optional(),
  oauthType: string().allow(null).optional(),
  oauthCode: string().allow(null).optional(),
  certs: array().items(string()).optional(),
});

export default loginReqDTOSchema;
