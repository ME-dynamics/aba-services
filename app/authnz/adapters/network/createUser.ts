import { createUser } from "../../../user";

/**
 * sync request to user service, using http or gRPC
 * create a user on user verification
 * @returns {string} user id
 */
export async function fetchCreateUser(userId: string, phoneNumber: string) {
  const user = await createUser({ id: userId, phoneNumber });
  const { username } = user.payload;
  return username
}
