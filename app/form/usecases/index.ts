import { insertFormStructure } from "../adapters";
import { buildSubmitFormStruct } from "./submitFormStruct";

export const submitFormStruct = buildSubmitFormStruct({ insertFormStructure });
