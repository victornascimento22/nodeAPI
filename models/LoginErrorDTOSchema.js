import { object, string, number, array } from 'joi';

const sessionInfoSchema = object({
  SessionId: string().optional(),
  UsnCod: number().integer().optional(),
  SessionLastAccessedTime: number().integer().optional(),
  Username: string().optional(),
  RemoteAddress: string().optional(),
  MachineID: string().optional(),
  MachineName: string().optional(),
  MachineUser: string().optional()
});

const loginErrorResponseSchema = object({
  Type: string().optional(),
  Sessions: array().items(sessionInfoSchema).optional()
});

export default loginErrorResponseSchema;