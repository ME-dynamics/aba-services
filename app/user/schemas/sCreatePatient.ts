import { errorSchemaObject, statusCodes } from "aba-node";
import { patient, patientSchema } from "./patientSchema";

const body = patient;

const response = {
  [statusCodes.OK]: patientSchema,
  [statusCodes.CREATED]: patientSchema,
  ...errorSchemaObject,
};

export const sCreatePatient = {
  body,
  response,
};
