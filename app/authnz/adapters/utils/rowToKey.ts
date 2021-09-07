import { nullToUndefined, types } from "aba-node";
import { adaptersTypes } from "../../types";


export function rowToKey(row: types.tRow): adaptersTypes.IKey {
  return {
    keyType: row.get("key_type"),
    kid: row.get("kid"),
    kty: row.get("kty"),
    crv: row.get("crv"),
    x: row.get("x"),
    d: nullToUndefined<string>(row.get("d")),
  };
}
