import { types  } from "aba-node";
import { deleteRequest } from "../controllers"
import { controllerTypes } from "../types"

export async function removeRequest(request: controllerTypes.tDeleteRequest, reply: types.tReply) {
    try {
        const response = await deleteRequest(request);
        reply.status(response.code);
        return response;
    } catch (error) {
        reply.status(500);
        return error;
    }
}