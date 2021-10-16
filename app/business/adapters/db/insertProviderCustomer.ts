import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "provider_customer",
    version: "v1",
    values: [
      { column: "provider_id", self: true },
      { column: "customer_id", self: true },
      { column: "name", self: true },
      { column: "profile_picture_url", self: true },
      { column: "description", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertProviderCustomer(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "business service, adapters, insert provider customer";
  const query = insertQueryGen();
  return async function insertProviderCustomer(
    info: entityTypes.IMadeProviderCustomerObject
  ) {
    const {
      providerId,
      customerId,
      name,
      profilePictureUrl,
      description,
      createdAt,
      modifiedAt,
      softDeleted,
    } = info;
    await insert({
      query,
      params: {
        provider_id: providerId,
        customer_id: customerId,
        name: undefinedToNull(name),
        profile_picture_url: undefinedToNull(profilePictureUrl),
        description: undefinedToNull(description),
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
