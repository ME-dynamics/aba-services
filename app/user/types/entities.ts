/**
 * base structure for user object
 */
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
export interface IBuildMakeUser {
  uuid: () => string;
  nanoid: (size: number) => string;
}

export interface ISiblings {
  role: "sister" | "brother" | "mother" | "father";
  education: tEducation;
  academicFields: string | undefined;
  emotionalRelation: string;
  mindDiseases: string | undefined;
}

export type tGender = "male" | "female";
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
export interface IUser {
  id: string;
  username: string | undefined;
  phoneNumber: string;
  firstName: string | undefined;
  lastName: string | undefined;
  profilePictureUrl: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  problemDescription: string | undefined;
  gender: tGender | undefined;
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
  deactivationReason: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}
export interface IMadeUserObject extends IUser {
  id: string;
  username: string;
  createdAt: Date;
  modifiedAt: Date;
}
/**
 * getter and setters for making the user
 */
export interface IMadeUser {
  get: {
    id: () => string;
    username: () => string;
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
    username: (username: string) => void;
    firstName: (firstName: string) => void;
    lastName: (lastName: string) => void;
    profilePictureUrl: (url: string) => void;
    deactivationReason: (newDeactivationReason: string) => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeUserObject;
}
