export type tBeckAnxietyFields = Record<string, number>;
export type tBeckDepressionIIFields = Record<string, number>;

export interface IBeckAnxietyResult {
  aggregate: number;
  interpret: string;
}

export interface IBuildMakeBeckAnxiety {
  formula: (fields: Record<string, number>) => IBeckAnxietyResult;
}
