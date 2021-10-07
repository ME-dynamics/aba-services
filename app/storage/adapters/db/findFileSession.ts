// import { queryGen } from "aba-node";
// import { adapterTypes, entityTypes } from "../../types";

// function selectQueryGen(): string {
//   const { selectQuery, operators } = queryGen;
//   const { equal } = operators;
//   const query = selectQuery({
//     table: "file_session",
//     version: "v1",
//     columns: ["*"],
//     where: [equal({ argument: "session", self: true })],
//   });
//   return query;
// }

// export function buildFindFileSession(
//   args: adapterTypes.IBuildFindByFileSession
// ) {
//   const { select, rowToFileSession } = args;
//   const errorPath = "storage, adapters, find file session by Session";
//   const query = selectQueryGen();
//   return async function findFileSession(
//     session: string
//   ): Promise<entityTypes.IMadeFileSessionObject | undefined> {
//     const result = await select({
//       query,
//       params: { session },
//       errorPath,
//       unique: true,
//       queryOptions: undefined,
//     });
//     if (result.rowLength === 0) {
//       return undefined;
//     }
//     return rowToFileSession(result.first());
//   };
// }
