export interface ICustomers {
  customerId: string;
  providerId: string;
  businessId: string;
  requestConfirmed: boolean;
  name: string;
  profilePictureUrl: string | undefined;
  description: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IMadeCustomersObject extends ICustomers {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeCustomers {
  get: {
    customerId: () => string;
    providerId: () => string;
    businessId: () => string;
    requestConfirmed: () => boolean;
    name: () => string;
    profilePictureUrl: () => string | undefined;
    description: () => string | undefined;
    createdAt: () => Date | undefined;
    modifiedAt: () => Date | undefined;
  };
  set: {
    requestConfirmed: () => void;
    name: (newName: string) => void;
    profilePictureUrl: (newUrl: string) => void;
    description: (newDesc: string) => void;
  };
  object: () => IMadeCustomersObject;
}
