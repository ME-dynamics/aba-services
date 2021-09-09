import { queryGen, undefinedToNull } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "staff_customer",
    version: "v1",
    values: [
      { column: "staff_id", self: true },
      { column: "customer_id", self: true },
      { column: "name", self: true },
      { column: "image_url", self: true },
      { column: "description", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertStaffCustomer(args: adaptersTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "business service, adapters, insert staff customer";
  const query = insertQueryGen();
  return async function insertStaffCustomer(
    info: entityTypes.IMadeStaffCustomerObject
  ) {
    const {
      staffId,
      customerId,
      name,
      imageUrl,
      description,
      createdAt,
      modifiedAt,
      softDeleted,
    } = info;
    await insert({
      query,
      params: {
        staff_id: staffId,
        customer_id: customerId,
        name: undefinedToNull(name),
        image_url: undefinedToNull(imageUrl),
        description: undefinedToNull(description),
        created_at: createdAt,
        modified_at: modifiedAt,
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
