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
  username: string | undefined;
  phoneNumber: string;
  firstName: string | undefined;
  lastName: string | undefined;
  gender: tGender | undefined;
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
    username: () => string | undefined;
    phoneNumber: () => string;
    firstName: () => string | undefined;
    lastName: () => string | undefined;
    profilePictureUrl: () => string | undefined;
    deactivationReason: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    username: (username: string | undefined) => void;
    firstName: (firstName: string | undefined) => void;
    lastName: (lastName: string | undefined) => void;
    profilePictureUrl: (url: string | undefined) => void;
    gender: (gender: "male" | "female" | undefined) => void;
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
  | "school-1"
  | "school-2"
  | "school-3"
  | "school-4"
  | "school-5"
  | "school-6"
  | "highschool-1"
  | "highschool-2"
  | "highschool-3"
  | "highschool-4"
  | "highschool-5"
  | "highschool-6"
  | "dropout"
  | "graduate"
  | "diploma"
  | "student"
  | "clergyman";

export interface ISiblings {
  role: "sister" | "brother" | "mother" | "father";
  education: tEducation;
  academicFields: string | undefined;
  emotionalRelation: string;
  mindDiseases: string | undefined;
}
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
  | "mazdayasna"
  | "mandaeans"
  | "christianity"
  | "judaism";

export interface IPatient {
  userId: string;
  problemDescription: string | undefined;
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
  cousinMarriage: boolean | undefined;
  siblingsPosition: number | undefined;
  siblings: ISiblings[] | undefined;
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
    cousinMarriage: () => boolean | undefined;
    siblingsPosition: () => number | undefined;
    siblings: () => ISiblings[] | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    problemDescription: (newDesc: string | undefined) => void;
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
    cousinMarriage: (cousinMarriage: boolean | undefined) => void;
    siblingsPosition: (newPosition: number | undefined) => void;
    siblings: (newSiblings: ISiblings[] | undefined) => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadePatientObject;
}
