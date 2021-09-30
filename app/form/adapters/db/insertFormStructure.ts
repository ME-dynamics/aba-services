// import { queryGen } from "aba-node";
// import { applicationVersion } from "../../config";
// import { adapterTypes, entityTypes } from "../../types";

// function insertQueryGen(): string {
//   const { insertQuery } = queryGen;
//   const query = insertQuery({
//     table: "form_structure",
//     version: applicationVersion,
//     values: [
//       { column: "id", self: true },
//       { column: "title", self: true },
//       { column: "description", self: true },
//       { column: "fields", self: true },
//       { column: "created_at", self: true },
//       { column: "modified_at", self: true },
//       { column: "soft_deleted", self: true },
//     ],
//   });
//   return query;
// }

// export function buildInsertFormStructure(
//   args: adapterTypes.IBuildInsert
// ) {
//   const { insert } = args;
//   const errorPath = "form, adapters, insert form structure";
//   const query = insertQueryGen();
//   return async function insertFormStructure(
//     formStructure: entityTypes.IMadeFormStructureObject
//   ) {
//     const {
//       id,
//       title,
//       fields,
//       description,
//       createdAt,
//       modifiedAt,
//       softDeleted,
//     } = formStructure;
//     await insert({
//       query,
//       params: {
//         id,
//         title,
//         fields,
//         description,
//         created_at: createdAt,
//         modified_at: modifiedAt,
//         soft_deleted: softDeleted,
//       },
//       errorPath,
//     });
//   };
// }
