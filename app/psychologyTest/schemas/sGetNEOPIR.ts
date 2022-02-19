import { errorSchema, fluentSchema, statusCodes } from "aba-node";
import { formStructureGen } from "./sFormStructure";

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      formStructureGen({ questionCount: 240, value: { min: 0, max: 4 } })
    ),
  [statusCodes.INTERNAL_SERVER_ERROR]: errorSchema,
};

export const sNEOPIRStructure = {
  response,
};
