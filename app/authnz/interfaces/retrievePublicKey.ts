import { types } from "aba-node";
import { getRetrievePublicKey } from "../controllers";
export async function retrievePublicKey(
  request: types.tRequest<unknown>,
  reply: types.tReply
) {
  try {
    const response = await getRetrievePublicKey();
    reply.code(200);
    return response;
  } catch (error) {
    reply.code(500);
    // console.dir(error, {depth: null, colors: true})
    reply.send({ error });
  }
}
