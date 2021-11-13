import { queryGen } from "aba-node";
import { adapterTypes, entityTypes } from "../../types";

function insertQueryGen(): string {
  const { insertQuery } = queryGen;
  const query = insertQuery({
    table: "patients",
    version: "v1",
    values: [
      { column: "user_id", self: true },
      { column: "problem_description", self: true },
      { column: "marital_status", self: true },
      { column: "marital_state", self: true },
      { column: "education", self: true },
      { column: "academic_field", self: true },
      { column: "religion", self: true },
      { column: "job", self: true },
      { column: "body_diseases", self: true },
      { column: "mind_diseases", self: true },
      { column: "drug_use", self: true },
      { column: "addiction", self: true },
      { column: "is_father_alive", self: true },
      { column: "is_mother_alive", self: true },
      { column: "father_death_reason", self: true },
      { column: "mother_death_reason", self: true },
      { column: "cousin_marriage", self: true },
      { column: "siblings_position", self: true },
      { column: "siblings", self: true },
      { column: "created_at", self: true },
      { column: "modified_at", self: true },
      { column: "soft_deleted", self: true },
    ],
  });
  return query;
}

export function buildInsertPatient(args: adapterTypes.IBuildInsert) {
  const { insert } = args;
  const errorPath = "user, adapters, db, insert patient";
  const query = insertQueryGen();
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
      softDeleted,
    } = patient;
    await insert({
      query,
      params: {
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
        soft_deleted: softDeleted,
      },
      errorPath,
    });
  };
}
