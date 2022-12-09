import type { entityTypes } from "../types";

export function buildMakeBooking(args: entityTypes.IBuildMakeBooking) {
  const { uuid } = args;
  return function makeBooking(booking: entityTypes.IMakeBooking) {
    const {
      providerId,
      year,
      month,
      day,
      id = uuid(),
      start,
      end,
      userId,
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = booking;
    let { userMeta, serviceMeta } = booking;

    function setUserMeta(newUserMeta: entityTypes.IUserMeta) {
      userMeta = newUserMeta;
      modifiedAt.setTime(Date.now());
    }
    function setServiceMeta(newServiceMeta: entityTypes.IServiceMeta) {
      serviceMeta = newServiceMeta;
      modifiedAt.setTime(Date.now());
    }
    const madeBooking: entityTypes.IMadeBooking = {
      get: {
        providerId: () => providerId,
        year: () => year,
        month: () => month,
        day: () => day,
        id: () => id,
        start: () => start,
        end: () => end,
        userId: () => userId,
        userMeta: () => userMeta,
        serviceMeta: () => serviceMeta,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
      },
      set: {
        userMeta: setUserMeta,
        serviceMeta: setServiceMeta,
      },
      object: () => ({
        providerId,
        year,
        month,
        day,
        id,
        start,
        end,
        userId,
        userMeta,
        serviceMeta,
        createdAt,
        modifiedAt,
      }),
    };
    return madeBooking;
  };
}
