export interface IBuildProcessAdsList {
  fetchDivarRoot: () => Promise<any>;
  addAdsIdsToQueue: (adId: string) => Promise<void>;
}
