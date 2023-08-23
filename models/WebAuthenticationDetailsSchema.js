import { object, string } from 'joi';

const webAuthDetailsSchema = object({
  remoteAddress: string().allow(null).optional(),
  sessionId: string().allow(null).optional(),
});

export default webAuthDetailsSchema;
