import { fluentSchema, statusCodes } from "aba-node";
import { testStructureGen } from "./sTestStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      testStructureGen({ questionCount: 21, value: { min: 0, max: 3 } })
    ),
};

export const sGetBeckDepressionII = {
  response,
};
