export interface IBuildMakeBooking {
  uuid: () => string;
}

export interface IMakeBooking {
  providerId: string;
  year: number;
  month: number;
  day: number;
  id: string | undefined;
  start: Date;
  end: Date;
  userId: string;
  userMeta: {
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
  serviceMeta: {
    title: string;
    description: string;
    price: number;
  };
  createdAt: Date | undefined;
  modifiedAt: Date | undefined;
}

export interface IUserMeta {
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
}

export interface IServiceMeta {
  title: string;
  description: string;
  price: number;
}

export interface IMadeBookingObject extends IMakeBooking {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IMadeBooking {
  get: {
    providerId: () => string;
    year: () => number;
    month: () => number;
    day: () => number;
    id: () => string | undefined;
    start: () => Date;
    end: () => Date;
    userId: () => string;
    userMeta: () => IUserMeta;
    serviceMeta: () => IServiceMeta;
    createdAt: () => Date | undefined;
    modifiedAt: () => Date | undefined;
  };
  set: {
    userMeta: (newUserMeta: IUserMeta) => void;
    serviceMeta: (newServiceMeta: IServiceMeta) => void;
  };
  object: () => IMadeBookingObject;
}
