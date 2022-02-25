import { types } from "aba-node";
import {
  ISubmitFormStructure,
  ISubmitMBTI,
  ISubmitBeckAnxiety,
  ISubmitBeckDepressionII,
  ISubmitTestById,
} from "./usecases";

interface IPostSubmitTest {
  Body: Omit<ISubmitTestById, "userId">;
}

export type tPostSubmitTest = types.tRequest<IPostSubmitTest>;

interface IPostSubmitFormStruct {
  Body: ISubmitFormStructure;
}

export type tPostSubmitFormStruct = types.tRequest<IPostSubmitFormStruct>;

interface IPostSubmitMBTI {
  Body: Omit<ISubmitMBTI, "userId">;
}

export type tPostCreateMbti = types.tRequest<IPostSubmitMBTI>;

interface IPostSubmitBeckAnxiety {
  Body: Omit<ISubmitBeckAnxiety, "userId">;
}

export type tPostCreateBeckAnxiety = types.tRequest<IPostSubmitBeckAnxiety>;

interface IPostSubmitBeckDepressionII {
  Body: Omit<ISubmitBeckDepressionII, "userId">;
}

export type tPostCreateDepressionII =
  types.tRequest<IPostSubmitBeckDepressionII>;

export type tGetTests = types.tRequest<unknown>;

interface IGetTestById {
  Params: {
    testId: string;
  };
}

export type tGetTestById = types.tRequest<IGetTestById>;

interface IGetTestsData {
  Params: {
    userId: string | undefined;
  };
}

export type tGetTestsData = types.tRequest<IGetTestsData>;

interface IGetTestDataById {
  Params: {
    id: string;
    userId: string | undefined;
  };
}
export type tGetTestDataById = types.tRequest<IGetTestDataById>;
