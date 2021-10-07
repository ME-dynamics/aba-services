// import { queryGen } from "aba-node";
// import { adapterTypes, entityTypes } from "../../types";

// function insertQueryGen(): string {
//   const { insertQuery } = queryGen;
//   const query = insertQuery({
//     table: "file_session",
//     version: "v1",
//     values: [
//       { column: "session", self: true },
//       { column: "secret", self: true },
//       { column: "user_id", self: true },
//       { column: "business_id", self: true },
//       { column: "access", self: true },
//       { column: "count_limit", self: true },
//       { column: "size_limit", self: true },
//       { column: "created_at", self: true },
//       { column: "modified_at", self: true },
//       { column: "soft_deleted", self: true },
//     ],
//   });
//   return query;
// }

// export function buildInsertFileSession(args: adapterTypes.IBuildInsert) {
//   const { insert } = args;
//   const errorPath = "storage service, adapters, insert file session";
//   const query = insertQueryGen();
//   return async function insertFileSession(
//     info: entityTypes.IMadeFileSessionObject
//   ): Promise<void> {
//     const {
//       session,
//       secret,
//       userId,
//       businessId,
//       access,
//       countLimit,
//       sizeLimit,
//       createdAt,
//       modifiedAt,
//       softDeleted,
//     } = info;
//     await insert({
//       query,
//       errorPath,
//       params: {
//         session,
//         secret,
//         user_id: userId,
//         business_id: businessId,
//         access,
//         count_limit: countLimit,
//         size_limit: sizeLimit,
//         created_at: createdAt,
//         modified_at: modifiedAt,
//         soft_deleted: softDeleted,
//       },
//     });
//   };
// }
