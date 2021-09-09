import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "customer_staff_request",
    version: "v1",
    values: [
      { column: "staff_id", self: true },
      { column: "customer_id", self: true },
      { column: "name", self: true },
      { column: "image_url", self: true },
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
    request: entityTypes.IMadeCustomerStaffRequestObject
  ): Promise<void> {
    const {
      staffId,
      customerId,
      confirmed,
      name,
      imageUrl,
      createdAt,
      modifiedAt,
      softDeleted,
    } = request;
    await insert({
      query,
      params: {
        staff_id: staffId,
        customer_id: customerId,
        confirmed,
        name: undefinedToNull(name),
        image_url: undefinedToNull(imageUrl),
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
