import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "users",
    version: "v1",
    values: [
      { column: "id", self: true },
      { column: "role", self: true },
      { column: "username", self: true },
      { column: "phone_number", self: true },
      { column: "first_name", self: true },
      { column: "last_name", self: true },
      { column: "profile_picture_url", self: true },
      { column: "gender", self: true },
      { column: "address", self: true },
      { column: "telephone", self: true },
      { column: "deactivation_reason", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertUser(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "user service, adapters, insert user";
  const query = insertQueryGen();
  return async function insertUser(info: entityTypes.IMadeUserObject) {
    const {
      id,
      role,
      username,
      phoneNumber,
      firstName,
      lastName,
      profilePictureUrl,
      gender,
      address,
      telephone,
      deactivationReason,
      createdAt,
      modifiedAt,
      softDeleted,
    } = info;
    await insert({
      query,
      errorPath,
      params: {
        id,
        role,
        username,
        phone_number: phoneNumber,
        first_name: firstName,
        last_name: lastName,
        profile_picture_url: profilePictureUrl,
        gender,
        address,
        telephone,
        deactivation_reason: deactivationReason,
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
    });
  };
}
