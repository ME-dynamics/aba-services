import { fluentSchema, statusCodes } from "aba-node";
import { testStructureGen } from "./sTestStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      testStructureGen({ questionCount: 87, value: { min: 0, max: 2 } })
    ),
};

export const sGetMbti = {
  response,
};
