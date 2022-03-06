import { queryGen, undefinedToNull } from "aba-node";
import { applicationVersion } from "../../config";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "customers",
    version: applicationVersion,
    values: [
      { column: "customer_id", dynamicValue: true },
      { column: "provider_id", dynamicValue: true },
      { column: "business_id", dynamicValue: true },
      { column: "request_confirmed", dynamicValue: true },
      { column: "name", dynamicValue: true },
      { column: "profile_picture_url", dynamicValue: true },
      { column: "description", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertCustomer(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "business service, adapters, insert customer";
  const { query, logQuery } = insertQueryGen();
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
    } = info;
    const params = {
      customer_id: customerId,
      provider_id: providerId,
      business_id: businessId,
      request_confirmed: requestConfirmed,
      name: name,
      profile_picture_url: undefinedToNull(profilePictureUrl),
      description: undefinedToNull(description),
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      insert({ query, params, errorPath }),
      insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
