import { createUser } from "../../../user";
import { adaptersTypes } from "../../types";
/**
 * sync request to user service, using http or gRPC
 * create a user on user verification
 * @returns {string} user id
 */
export async function fetchCreateUser(args: adaptersTypes.ICreateUser) {
  const { userId, role, phoneNumber } = args;

  const user = await createUser({ id: userId, role, phoneNumber });
  const { username } = user.payload;
  return username;
}
