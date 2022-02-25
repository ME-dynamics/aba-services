import { types } from "aba-node";
import { postSubmitTest } from "../controllers";
import { controllerTypes } from "../types";
export async function submitTest(
  request: controllerTypes.tPostSubmitTest,
  reply: types.tReply
) {
  try {
    const response = await postSubmitTest(request);
    reply.code(response.code);
    reply.send(response);
  } catch (error) {
    reply.code(500);
    console.log(error);
    reply.send("unknown error");
  }
}
