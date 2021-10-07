// import { makeFileSession } from "../entities";
// import { httpResultSuccess, httpResultServerError } from "aba-node";
// import { entityTypes, usecaseTypes } from "../types";

// export function buildCreateFileSession(
//   args: usecaseTypes.IBuildCreateFileSession
// ) {
//   const { insertFileSession } = args;
//   const { created } = httpResultSuccess;
//   function fileSessionInput(
//     info: usecaseTypes.ICreateFileSession
//   ): entityTypes.IMakeFileSession {
//     const { userId, businessId, access, countLimit, sizeLimit } = info;
//     return {
//       session: undefined,
//       secret: undefined,
//       userId,
//       businessId,
//       access,
//       countLimit,
//       sizeLimit,
//       createdAt: undefined,
//       modifiedAt: undefined,
//       softDeleted: false,
//     };
//   }
//   return async function createFileSession(
//     info: usecaseTypes.ICreateFileSession
//   ) {
//     const fileSession = makeFileSession(fileSessionInput(info));
//     await insertFileSession(fileSession.object());
//     return created<usecaseTypes.IFileSessionResult>({
//       payload: {
//         session: fileSession.get.session(),
//         secret: fileSession.get.secret(),
//       },
//     });
//   };
// }
