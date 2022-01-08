import { statusCodes, fluentSchema, errorSchema } from "aba-node";
import { sFormData } from "./sFormData";
function mbtiGen() {
  let schema = fluentSchema.object().maxProperties(87);
  for (let index = 1; index <= 87; index++) {
    schema = schema.prop(`${index}`, fluentSchema.enum(["1", "2"]));
  }
  return schema;
}

const response = {
  [statusCodes.CREATED]: sFormData,
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sSubmitMbti = {
  body: mbtiGen(),
  response,
};
