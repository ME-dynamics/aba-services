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
  softDeleted: boolean;
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
    softDeleted: () => boolean;
  };
  set: {
    requestConfirmed: () => void;
    name: (newName: string) => void;
    profilePictureUrl: (newUrl: string) => void;
    description: (newDesc: string) => void;
    remove: () => void;
    restore: () => void;
  };
  object: () => IMadeCustomersObject;
}

// export interface IProviderCustomer {
//   providerId: string;
//   customerId: string;
//   name: string | undefined;
//   profilePictureUrl: string | undefined;
//   description: string | undefined;
//   createdAt: Date | undefined;
//   modifiedAt: Date | undefined;
//   softDeleted: boolean;
// }

// export interface IMadeProviderCustomerObject extends IProviderCustomer {
//   createdAt: Date;
//   modifiedAt: Date;
// }

// export interface IMadeProviderCustomer {
//   get: {
//     providerId: () => string;
//     customerId: () => string;
//     name: () => string | undefined;
//     profilePictureUrl: () => string | undefined;
//     description: () => string | undefined;
//     createdAt: () => Date;
//     modifiedAt: () => Date;
//     softDeleted: () => boolean;
//   };
//   set: {
//     name: (newName: string | undefined) => void;
//     profilePictureUrl: (newUrl: string | undefined) => void;
//     description: (newDescription: string | undefined) => void;
//     remove: () => void;
//     restore: () => void;
//   };
//   object: () => IMadeProviderCustomerObject;
// }

// // request

// export interface ICustomerProviderRequest {
//   providerId: string;
//   customerId: string;
//   name: string | undefined;
//   profilePictureUrl: string | undefined;
//   confirmed: boolean;
//   createdAt: Date | undefined;
//   modifiedAt: Date | undefined;
//   softDeleted: boolean;
// }

// export interface IMadeCustomerProviderRequestObject
//   extends ICustomerProviderRequest {
//   createdAt: Date;
//   modifiedAt: Date;
// }

// export interface IMadeCustomerProviderRequest {
//   get: {
//     providerId: () => string;
//     customerId: () => string;
//     name: () => string | undefined;
//     profilePictureUrl: () => string | undefined;
//     confirmed: () => boolean;
//     createdAt: () => Date;
//     modifiedAt: () => Date;
//     softDeleted: () => boolean;
//   };
//   set: {
//     name: (newName: string | undefined) => void;
//     profilePictureUrl: (newUrl: string | undefined) => void;
//     confirm: () => void;
//     reject: () => void;
//     restore: () => void;
//     remove: () => void;
//   };
//   object: () => IMadeCustomerProviderRequestObject;
// }
