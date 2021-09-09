export interface IStaffCustomer {
  staffId: string;
  customerId: string;
  name: string | undefined;
  imageUrl: string | undefined;
  description: string | undefined;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeStaffCustomerObject extends IStaffCustomer {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeStaffCustomer {
  get: {
    staffId: () => string;
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
  object: () => IMadeStaffCustomerObject;
}

// request

export interface ICustomerStaffRequest {
  staffId: string;
  customerId: string;
  name: string | undefined;
  imageUrl: string | undefined;
  confirmed: boolean;
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
  softDeleted: boolean;
}

export interface IMadeCustomerStaffRequestObject extends ICustomerStaffRequest {
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeCustomerStaffRequest {
  get: {
    staffId: () => string;
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
  object: () => IMadeCustomerStaffRequestObject;
}
