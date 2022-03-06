import { queryGen, undefinedToNull } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "users",
    version: "v1",
    values: [
      { column: "id", dynamicValue: true },
      { column: "role", dynamicValue: true },
      { column: "username", dynamicValue: true },
      { column: "phone_number", dynamicValue: true },
      { column: "first_name", dynamicValue: true },
      { column: "last_name", dynamicValue: true },
      { column: "description", dynamicValue: true },
      { column: "birthday", dynamicValue: true },
      { column: "profile_picture_url", dynamicValue: true },
      { column: "gender", dynamicValue: true },
      { column: "address", dynamicValue: true },
      { column: "telephone", dynamicValue: true },
      { column: "deactivation_reason", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertUser(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "user service, adapters, insert user";
  const { query, logQuery } = insertQueryGen();
  return async function insertUser(info: entityTypes.IMadeUserObject) {
    const {
      id,
      role,
      username,
      phoneNumber,
      firstName,
      lastName,
      description,
      profilePictureUrl,
      gender,
      birthday,
      address,
      telephone,
      deactivationReason,
      createdAt,
      modifiedAt,
    } = info;
    const params = {
      id,
      role,
      username,
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName,
      description: undefinedToNull<string>(description || ""),
      profile_picture_url: profilePictureUrl,
      gender,
      birthday,
      address,
      telephone,
      deactivation_reason: deactivationReason,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      await insert({ query, errorPath, params }),
      await insert({ query: logQuery, errorPath, params }),
    ]);
  };
}
