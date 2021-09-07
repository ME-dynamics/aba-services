import { queryGen } from "aba-node";
import { adaptersTypes, entityTypes } from "../../types";



function selectQueryGen(): string {
    const { selectQuery, operators } = queryGen;
    const { equal } = operators;
    const query = selectQuery({
        table: "token",
        version: "v1",
        columns: ["*"],
        where: [equal({argument: "otp_id", self: true})]
    });
    return query;
}


export function buildFindTokenByUserId(args: adaptersTypes.IBuildFindTokeByUserId) {
    const { select, rowToToken } = args;
    const errorPath = "authnz, adapters, find token by user id";
    const query = selectQueryGen();
    return async function findTokenByUserId(userId:string): Promise<entityTypes.IMadeTokenObject | undefined> {
        const result = await select({
            query,
            params: {otp_id: userId},
            unique: true,
            errorPath,
            queryOptions: undefined
        })
        if(result.rowLength === 0) {
            return undefined;
        }
        return rowToToken(result.first());
    }
}