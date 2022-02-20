import { errorSchema, fluentSchema, statusCodes } from "aba-node";
import { testStructureGen } from "./sTestStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      testStructureGen({ questionCount: 240, value: { min: 0, max: 4 } })
    ),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sNEOPIRStructure = {
  response,
};
