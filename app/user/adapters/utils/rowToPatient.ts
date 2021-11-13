import { types, nullToUndefined } from "aba-node";
import { entityTypes } from "../../types";

export function rowToPatient(row: types.tRow): entityTypes.IMadePatientObject {
  return {
    userId: row.get("user_id")?.toString(),
    problemDescription: row.get("problem_description"),
    maritalStatus: nullToUndefined<entityTypes.tMaritalStatus>(
      row.get("marital_status")
    ),
    maritalState: nullToUndefined<entityTypes.tMaritalState>(
      row.get("marital_state")
    ),
    education: nullToUndefined<entityTypes.tEducation>(row.get("education")),
    academicField: nullToUndefined<string>(row.get("academic_field")),
    religion: nullToUndefined<entityTypes.tReligion>(row.get("religion")),
    job: nullToUndefined<string>(row.get("job")),
    bodyDiseases: nullToUndefined<string>(row.get("body_diseases")),
    mindDiseases: nullToUndefined<string>(row.get("mind_diseases")),
    drugUse: nullToUndefined<string>(row.get("drug_use")),
    addiction: nullToUndefined<string>(row.get("addiction")),
    isFatherAlive: nullToUndefined<boolean>(row.get("is_father_alive")),
    isMotherAlive: nullToUndefined<boolean>(row.get("is_mother_alive")),
    fatherDeathReason: nullToUndefined<string>(row.get("father_death_reason")),
    motherDeathReason: nullToUndefined<string>(row.get("mother_death_reason")),
    cousinMarriage: nullToUndefined<boolean>(row.get("cousin_marriage")),
    siblingsPosition: nullToUndefined<number>(row.get("siblings_position")),
    siblings: nullToUndefined<string>(row.get("siblings")),
    createdAt: row.get("created_at"),
    modifiedAt: row.get("modified_at"),
    softDeleted: row.get("soft_deleted"),
  };
}
