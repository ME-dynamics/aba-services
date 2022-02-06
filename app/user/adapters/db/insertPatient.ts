import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen() {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "patients",
    version: "v1",
    values: [
      { column: "user_id", dynamicValue: true },
      { column: "problem_description", dynamicValue: true },
      { column: "marital_status", dynamicValue: true },
      { column: "marital_state", dynamicValue: true },
      { column: "education", dynamicValue: true },
      { column: "academic_field", dynamicValue: true },
      { column: "religion", dynamicValue: true },
      { column: "job", dynamicValue: true },
      { column: "body_diseases", dynamicValue: true },
      { column: "mind_diseases", dynamicValue: true },
      { column: "drug_use", dynamicValue: true },
      { column: "addiction", dynamicValue: true },
      { column: "is_father_alive", dynamicValue: true },
      { column: "is_mother_alive", dynamicValue: true },
      { column: "father_death_reason", dynamicValue: true },
      { column: "mother_death_reason", dynamicValue: true },
      { column: "cousin_marriage", dynamicValue: true },
      { column: "siblings_position", dynamicValue: true },
      { column: "siblings", dynamicValue: true },
      { column: "created_at", dynamicValue: true },
      { column: "modified_at", dynamicValue: true },
    ],
  });
  return query;
}

export function buildInsertPatient(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "user, adapters, db, insert patient";
  const { query, logQuery } = insertQueryGen();
  return async function insertPatient(patient: entityTypes.IMadePatientObject) {
    const {
      userId,
      problemDescription,
      maritalStatus,
      maritalState,
      education,
      academicField,
      religion,
      job,
      bodyDiseases,
      mindDiseases,
      drugUse,
      addiction,
      isFatherAlive,
      isMotherAlive,
      fatherDeathReason,
      motherDeathReason,
      cousinMarriage,
      siblingsPosition,
      siblings,
      createdAt,
      modifiedAt,
    } = patient;
    const params = {
      user_id: userId,
      problem_description: problemDescription,
      marital_status: maritalStatus,
      marital_state: maritalState,
      education,
      academic_field: academicField,
      religion,
      job,
      body_diseases: bodyDiseases,
      mind_diseases: mindDiseases,
      drug_use: drugUse,
      addiction,
      is_father_alive: isFatherAlive,
      is_mother_alive: isMotherAlive,
      father_death_reason: fatherDeathReason,
      mother_death_reason: motherDeathReason,
      cousin_marriage: cousinMarriage,
      siblings_position: siblingsPosition,
      siblings,
      created_at: createdAt,
      modified_at: modifiedAt,
    };
    await Promise.all([
      await insert({ query, params, errorPath }),
      await insert({ query: logQuery, params, errorPath }),
    ]);
  };
}
