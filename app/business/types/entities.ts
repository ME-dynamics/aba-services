export interface IProviderCustomer {
  providerId: string;
  customerId: string;
  name: string | undefined;
  imageUrl: string | undefined;
  description: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeProviderCustomerObject extends IProviderCustomer {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeProviderCustomer {
  get: {
    providerId: () => string;
    customerId: () => string;
    name: () => string | undefined;
    imageUrl: () => string | undefined;
    description: () => string | undefined;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    name: (newName: string | undefined) => void;
    imageUrl: (newUrl: string | undefined) => void;
    description: (newDescription: string | undefined) => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeProviderCustomerObject;
}

// request

export interface ICustomerProviderRequest {
  providerId: string;
  customerId: string;
  name: string | undefined;
  imageUrl: string | undefined;
  confirmed: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeCustomerProviderRequestObject
  extends ICustomerProviderRequest {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeCustomerProviderRequest {
  get: {
    providerId: () => string;
    customerId: () => string;
    name: () => string | undefined;
    imageUrl: () => string | undefined;
    confirmed: () => boolean;
    createdAt: () => Date;
    modifiedAt: () => Date;
    softDeleted: () => boolean;
  };
  set: {
    name: (newName: string | undefined) => void;
    imageUrl: (newUrl: string | undefined) => void;
    confirm: () => void;
    reject: () => void;
    restore: () => void;
    remove: () => void;
  };
  object: () => IMadeCustomerProviderRequestObject;
}
