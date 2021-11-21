import { queryGen, undefinedToNull } from "aba-node";
import { applicationVersion } from "../../config";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "customers",
    version: applicationVersion,
    values: [
      { column: "customer_id", self: true },
      { column: "provider_id", self: true },
      { column: "business_id", self: true },
      { column: "request_confirmed", self: true },
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

export function buildInsertCustomer(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "business service, adapters, insert customer";
  const query = insertQueryGen();
  return async function insertCustomer(info: entityTypes.IMadeCustomersObject) {
    const {
      customerId,
      providerId,
      businessId,
      requestConfirmed,
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
        customer_id: customerId,
        provider_id: providerId,
        business_id: businessId,
        request_confirmed: requestConfirmed,
        name: name,
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
