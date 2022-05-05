import { types } from "aba-node";
import { postPasswordlessVerify } from "../controllers";
import { controllerTypes } from "../types";
export async function passwordlessVerify(
  request: controllerTypes.tPostPasswordlessVerify,
  reply: types.tReply
) {
  try {
    const response = await postPasswordlessVerify(request);
    reply.code(response.code);

    reply.setCookie("authnzjwt", response.payload?.jwtToken || "");
    reply.setCookie("refresh", response.payload?.refreshToken || "");
    return response;
  } catch (error) {
    reply.code(500);
    // console.dir(error, {depth: null, colors: true})
    reply.send({ error });
  }
}
