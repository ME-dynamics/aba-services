import { fluentSchema, statusCodes } from "aba-node";
import { formStructureGen } from "./sFormStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      formStructureGen({ questionCount: 21, value: { min: 0, max: 3 } })
    ),
};

export const sGetBeckDepressionII = {
  response,
};
