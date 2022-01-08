import { fluentSchema, errorSchema, statusCodes } from "aba-node";
import { formStructureGen } from "./sFormStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      formStructureGen({ questionCount: 87, value: { min: 0, max: 2 } })
    ),
};

export const sGetMbti = {
  response,
};
