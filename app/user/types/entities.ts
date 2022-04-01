/**
 * base structure for user object
 */

export interface IBuildMakeUser {
  uuid: () => string;
  nanoid: (size: number) => string;
}

export type tGender = "male" | "female";
export interface IUser {
  id: string;
  role: string;
  username: string | undefined;
  phoneNumber: string;
  firstName: string | undefined;
  lastName: string | undefined;
  description: string | undefined;
  gender: tGender | undefined;
  birthday: Date | undefined;
  profilePictureUrl: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  deactivationReason: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}
export interface IMadeUserObject extends IUser {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}
/**
 * getter and setters for making the user
 */
export interface IMadeUser {
  get: {
    id: () => string;
    role: () => string;
    username: () => string | undefined;
    phoneNumber: () => string;
    firstName: () => string | undefined;
    lastName: () => string | undefined;
    birthday: () => Date | undefined;
    description: () => string | undefined;
    gender: () => tGender | undefined;
    profilePictureUrl: () => string | undefined;
    address: () => string | undefined;
    telephone: () => string | undefined;
    deactivationReason: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    role: (role: string) => void;
    username: (username: string | undefined) => void;
    firstName: (firstName: string | undefined) => void;
    lastName: (lastName: string | undefined) => void;
    description: (newDesc: string | undefined) => void;
    birthday: (Date: Date | undefined) => void;
    profilePictureUrl: (url: string | undefined) => void;
    gender: (gender: tGender | undefined) => void;
    address: (address: string | undefined) => void;
    telephone: (telephone: string | undefined) => void;
    deactivationReason: (newDeactivationReason: string) => void;
  };
  object: () => IMadeUserObject;
}

export type tEducation =
  | "uneducated"
  | "underAged"
  | "preSchool"
  | "school"
  | "preHighSchool"
  | "highSchool"
  | "dropoutPreSchool"
  | "dropoutSchool"
  | "dropoutSchool"
  | "student"
  | "graduate"
  | "diploma"
  | "clergyman";

// export interface ISiblings {
//   role: "sister" | "brother" | "mother" | "father";
//   education: tEducation;
//   academicField: string | undefined;
//   emotionalRelation: string;
//   mindDiseases: string | undefined;
// }
export type tMaritalStatus = "engaged" | "single";
export type tMaritalState =
  | "namzad"
  | "aghed"
  | "aghedDayem"
  | "movaghat"
  | "wives"
  | "motarekeh"
  | "motalagheh"
  | "widow";

export type tReligion =
  | "islamShia"
  | "islamSunny"
  | "zoroastrianism" // zartoshti
  | "christianity"
  | "other";
export interface IPatient {
  userId: string;
  problemDescription: string;
  maritalStatus: tMaritalStatus | undefined;
  maritalState: tMaritalState | undefined;
  education: tEducation | undefined;
  academicField: string | undefined;
  religion: tReligion | undefined;
  job: string | undefined;
  bodyDiseases: string | undefined;
  mindDiseases: string | undefined;
  drugUse: string | undefined;
  addiction: string | undefined;
  isFatherAlive: boolean | undefined;
  isMotherAlive: boolean | undefined;
  fatherDeathReason: string | undefined;
  motherDeathReason: string | undefined;
  cousinMarriage: boolean | undefined;
  siblingsPosition: number | undefined;
  siblings: string | undefined;
  siblingDiseases: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadePatientObject extends IPatient {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadePatient {
  get: {
    userId: () => string;
    problemDescription: () => string | undefined;
    maritalStatus: () => tMaritalStatus | undefined;
    maritalState: () => tMaritalState | undefined;
    education: () => tEducation | undefined;
    academicField: () => string | undefined;
    religion: () => tReligion | undefined;
    job: () => string | undefined;
    bodyDiseases: () => string | undefined;
    mindDiseases: () => string | undefined;
    drugUse: () => string | undefined;
    addiction: () => string | undefined;
    isFatherAlive: () => boolean | undefined;
    isMotherAlive: () => boolean | undefined;
    fatherDeathReason: () => string | undefined;
    motherDeathReason: () => string | undefined;
    cousinMarriage: () => boolean | undefined;
    siblingsPosition: () => number | undefined;
    siblings: () => string | undefined;
    siblingDiseases: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
  };
  set: {
    problemDescription: (newDesc: string) => void;
    maritalStatus: (newStatus: tMaritalStatus | undefined) => void;
    maritalState: (newState: tMaritalState | undefined) => void;
    education: (newEducation: tEducation | undefined) => void;
    academicField: (newAcademicField: string | undefined) => void;
    religion: (newReligion: tReligion | undefined) => void;
    job: (newJob: string | undefined) => void;
    bodyDiseases: (newDiseases: string | undefined) => void;
    mindDiseases: (newMindDiseases: string | undefined) => void;
    drugUse: (newDrugUse: string | undefined) => void;
    addiction: (newAddiction: string | undefined) => void;
    isFatherAlive: (isFatherAlive: boolean | undefined) => void;
    isMotherAlive: (isMotherAlive: boolean | undefined) => void;
    fatherDeathReason: (reason: string) => void;
    motherDeathReason: (reason: string) => void;
    cousinMarriage: (cousinMarriage: boolean | undefined) => void;
    siblingsPosition: (newPosition: number | undefined) => void;
    siblings: (desc: string | undefined) => void;
    siblingDiseases: (diseases: string | undefined) => void;
  };
  object: () => IMadePatientObject;
}
