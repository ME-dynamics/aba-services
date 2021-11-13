import { entityTypes } from "../types";

export function buildMakePatient() {
  return function makePatient(patient: entityTypes.IPatient) {
    const { userId, createdAt = new Date(), modifiedAt = new Date() } = patient;
    let {
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
      softDeleted,
    } = patient;
    // Setters
    function setProblemDescription(newDesc: string) {
      problemDescription = newDesc;
      modifiedAt.setTime(Date.now());
    }
    function setMaritalStatus(
      newStatus: entityTypes.tMaritalStatus | undefined
    ) {
      maritalStatus = newStatus;
      modifiedAt.setTime(Date.now());
    }
    function setMaritalState(newState: entityTypes.tMaritalState | undefined) {
      maritalState = newState;
      modifiedAt.setTime(Date.now());
    }
    function setEducation(newEducation: entityTypes.tEducation | undefined) {
      education = newEducation;
      modifiedAt.setTime(Date.now());
    }
    function setAcademicField(newAcademicField: string | undefined) {
      academicField = newAcademicField;
      modifiedAt.setTime(Date.now());
    }
    function setReligion(newReligion: entityTypes.tReligion | undefined) {
      religion = newReligion;
      modifiedAt.setTime(Date.now());
    }
    function setJob(newJob: string | undefined) {
      job = newJob;
      modifiedAt.setTime(Date.now());
    }
    function setBodyDiseases(newDiseases: string | undefined) {
      bodyDiseases = newDiseases;
      modifiedAt.setTime(Date.now());
    }
    function setMindDiseases(newMindDiseases: string | undefined) {
      mindDiseases = newMindDiseases;
      modifiedAt.setTime(Date.now());
    }
    function setDrugUse(newDrugUse: string | undefined) {
      drugUse = newDrugUse;
      modifiedAt.setTime(Date.now());
    }
    function setAddiction(newAddiction: string | undefined) {
      addiction = newAddiction;
      modifiedAt.setTime(Date.now());
    }
    function setIsFatherAlive(alive: boolean | undefined) {
      isFatherAlive = alive;
      modifiedAt.setTime(Date.now());
    }
    function setIsMotherAlive(alive: boolean | undefined) {
      isMotherAlive = alive;
      modifiedAt.setTime(Date.now());
    }
    function setFatherDeathReason(reason: string) {
      fatherDeathReason = reason;
      modifiedAt.setTime(Date.now());
    }
    function setMotherDeathReason(reason: string) {
      motherDeathReason = reason;
      modifiedAt.setTime(Date.now());
    }
    function setCousinMarriage(status: boolean | undefined) {
      cousinMarriage = status;
      modifiedAt.setTime(Date.now());
    }
    function setSiblingsPosition(newPosition: number | undefined) {
      siblingsPosition = newPosition;
      modifiedAt.setTime(Date.now());
    }
    function setSiblings(newSiblings: string | undefined) {
      siblings = newSiblings;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const madePatient: entityTypes.IMadePatient = {
      get: {
        userId: () => userId,
        problemDescription: () => problemDescription,
        maritalStatus: () => maritalStatus,
        maritalState: () => maritalState,
        education: () => education,
        academicField: () => academicField,
        religion: () => religion,
        job: () => job,
        bodyDiseases: () => bodyDiseases,
        mindDiseases: () => mindDiseases,
        drugUse: () => drugUse,
        addiction: () => addiction,
        isFatherAlive: () => isFatherAlive,
        isMotherAlive: () => isMotherAlive,
        fatherDeathReason: () => fatherDeathReason,
        motherDeathReason: () => motherDeathReason,
        cousinMarriage: () => cousinMarriage,
        siblingsPosition: () => siblingsPosition,
        siblings: () => siblings,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        problemDescription: setProblemDescription,
        maritalStatus: setMaritalStatus,
        maritalState: setMaritalState,
        education: setEducation,
        academicField: setAcademicField,
        religion: setReligion,
        job: setJob,
        bodyDiseases: setBodyDiseases,
        mindDiseases: setMindDiseases,
        drugUse: setDrugUse,
        addiction: setAddiction,
        isFatherAlive: setIsFatherAlive,
        isMotherAlive: setIsMotherAlive,
        fatherDeathReason: setFatherDeathReason,
        motherDeathReason: setMotherDeathReason,
        cousinMarriage: setCousinMarriage,
        siblingsPosition: setSiblingsPosition,
        siblings: setSiblings,
        remove,
        restore,
      },
      object: () => {
        return {
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
        };
      },
    };
    return madePatient;
  };
}
