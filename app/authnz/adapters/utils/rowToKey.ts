import { nullToUndefined, types } from "aba-node";
import { IKey } from "../../types";


export function rowToKey(row: types.tRow): IKey {
  return {
    keyType: row.get("key_type"),
    kid: row.get("kid"),
    kty: row.get("kty"),
    crv: row.get("crv"),
    x: row.get("x"),
    d: nullToUndefined<string>(row.get("d")),
  };
}
