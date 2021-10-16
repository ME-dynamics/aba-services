import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "customer_provider_request",
    version: "v1",
    values: [
      { column: "provider_id", self: true },
      { column: "customer_id", self: true },
      { column: "name", self: true },
      { column: "profile_picture_url", self: true },
      { column: "confirmed", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertRequest(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "business, adapters, insert request";
  const query = insertQueryGen();
  return async function insertRequest(
    request: entityTypes.IMadeCustomerProviderRequestObject
  ): Promise<void> {
    const {
      providerId,
      customerId,
      confirmed,
      name,
      profilePictureUrl,
      createdAt,
      modifiedAt,
      softDeleted,
    } = request;
    await insert({
      query,
      params: {
        provider_id: providerId,
        customer_id: customerId,
        confirmed,
        name: undefinedToNull(name),
        profile_picture_url: undefinedToNull(profilePictureUrl),
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
