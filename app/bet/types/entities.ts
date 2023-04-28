export type tPeriod =
  | "1m"
  | "3m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "2h"
  | "3h"
  | "4h"
  | "1d"
  | "1w"
  | "1M";
export interface IBet {
  /**
   * @minimum 2023
   * @maximum 2055
   */
  year: number | undefined;
  /**
   * @minimum 1
   * @maximum 12
   */
  month: number | undefined;
  /**
   * @minimum 1
   * @maximum 31
   */
  day: number | undefined;
  exchange: string;
  cryptoPair: string;
  period: tPeriod;
  startTime: number | undefined;
  endTime: number | undefined;
  /**
   * @format uuid
   */
  id: string | undefined;
  /**
   * @format uuid
   */
  userId: string;
  choice: boolean;
  /**
   * @type uint
   */
  stake: number;
  /**
   * @format uuid
   */
  stakeRef: string;
  status: "won" | "lost" | "pending";
}

export interface IBuildBet {
  uuid: () => string;
  currentDate: () => {
    year: number;
    month: number;
    day: number;
  };
}
