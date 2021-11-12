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
  age: number | undefined;
  profilePictureUrl: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  deactivationReason: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
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
    description: () => string | undefined;
    gender: () => tGender | undefined;
    age: () => number | undefined;
    profilePictureUrl: () => string | undefined;
    address: () => string | undefined;
    telephone: () => string | undefined;
    deactivationReason: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    username: (username: string | undefined) => void;
    firstName: (firstName: string | undefined) => void;
    lastName: (lastName: string | undefined) => void;
    description: (newDesc: string | undefined) => void;
    profilePictureUrl: (url: string | undefined) => void;
    gender: (gender: tGender | undefined) => void;
    age: (newAge: number | undefined) => void;
    address: (address: string | undefined) => void;
    telephone: (telephone: string | undefined) => void;
    deactivationReason: (newDeactivationReason: string) => void;
    remove: () => void;
    restore: () => void;
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
  birthday: Date | undefined;
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
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadePatientObject extends IPatient {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadePatient {
  get: {
    userId: () => string;
    problemDescription: () => string | undefined;
    birthday: () => Date | undefined;
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
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    problemDescription: (newDesc: string) => void;
    birthday: (Date: Date | undefined) => void;
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
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadePatientObject;
}
