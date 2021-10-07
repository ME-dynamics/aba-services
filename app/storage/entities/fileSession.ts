// import { entityTypes } from "../types";
// export function buildMakeFileSession(args: entityTypes.IBuildMakeFileSession) {
//   const { nanoid } = args;
//   return function makeFileSession(image: entityTypes.IMakeFileSession) {
//     const {
//       session = nanoid(32),
//       secret = nanoid(64),
//       userId,
//       businessId,
//       access,
//       countLimit = 1,
//       sizeLimit = 5, // in megabytes
//       createdAt = new Date(),
//       modifiedAt = new Date(),
//     } = image;
//     let { softDeleted } = image;
//     // * Setters
//     function remove() {
//       softDeleted = true;
//       modifiedAt.setTime(Date.now());
//     }
//     function restore() {
//       softDeleted = false;
//       modifiedAt.setTime(Date.now());
//     }
//     const madeFileSession: entityTypes.IMadeFileSession = {
//       get: {
//         session: () => session,
//         secret: () => secret,
//         userId: () => userId,
//         businessId: () => businessId,
//         access: () => access,
//         countLimit: () => countLimit,
//         sizeLimit: () => sizeLimit,
//         createdAt: () => createdAt,
//         modifiedAt: () => modifiedAt,
//         softDeleted: () => softDeleted,
//       },
//       set: {
//         remove,
//         restore,
//       },
//       object: () => {
//         return {
//           session,
//           secret,
//           userId,
//           businessId,
//           access,
//           countLimit,
//           sizeLimit,
//           createdAt,
//           modifiedAt,
//           softDeleted,
//         };
//       },
//     };

//     return madeFileSession;
//   };
// }
