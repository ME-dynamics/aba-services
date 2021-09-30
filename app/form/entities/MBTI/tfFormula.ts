const tData : Record<string,{a:number , b:number}> = {
    "51": {
        a: 1,
        b: 0
    },
    "52": {
        a: 1,
        b: 0
    },
    "53": {
        a: 0,
        b: 2
    },
    "54": {
        a: 2,
        b: 0
    },
    "55": {
        a: 0,
        b: 1
    },
    "56": {
        a: 1,
        b: 0
    },
    "57": {
        a: 2,
        b: 0
    },
    "58": {
        a: 0,
        b: 0
    },
    "59": {
        a: 2,
        b: 0
    },
    "60": {
        a: 0,
        b: 1
    },
    "61": {
        a: 2,
        b: 0
    },
    "62": {
        a: 0,
        b: 2
    },
    "63": {
        a: 0,
        b: 0
    },
    "64": {
        a: 0,
        b: 1
    },
    "65": {
        a: 2,
        b: 0
    },
    "66": {
        a: 0,
        b: 2
    },
    "67": {
        a: 0,
        b: 2
    },
    "68": {
        a: 0,
        b: 2
    },
    "69": {
        a: 0,
        b: 0
    },
    "70": {
        a: 1,
        b: 0
    },
    "71":{
        a: 2,
        b: 0
    },
    "72":{
        a: 1,
        b: 0
    },
    "73":{
        a: 1,
        b: 0
    },
    "74":{
        a: 2,
        b: 0
    },
    "75":{
        a: 0,
        b: 2
    }

}
const fData:Record<string,{a:number , b:number}>={
    "51": {
        a: 0,
        b: 0
    },
    "52": {
        a: 0,
        b: 0
    },
    "53": {
        a: 2,
        b: 0
    },
    "54": {
        a: 0,
        b: 2
    },
    "55": {
        a: 1,
        b: 0
    },
    "56": {
        a: 0,
        b: 1
    },
    "57": {
        a: 0,
        b: 2
    },
    "58": {
        a: 0,
        b: 2
    },
    "59": {
        a: 0,
        b: 0
    },
    "60": {
        a: 0,
        b: 0
    },
    "61": {
        a: 0,
        b: 0
    },
    "62": {
        a: 1,
        b: 0
    },
    "63": {
        a: 0,
        b: 2
    },
    "64": {
        a: 1,
        b: 0
    },
    "65": {
        a: 0,
        b: 2
    },
    "66": {
        a: 1,
        b: 0
    },
    "67": {
        a: 0,
        b: 0
    },
    "68": {
        a: 0,
        b: 0
    },
    "69": {
        a: 0,
        b: 2
    },
    "70": {
        a: 0,
        b: 1
    },
    "71":{
        a: 0,
        b: 2
    },
    "72":{
        a: 0,
        b: 2
    },
    "73":{
        a: 0,
        b: 2
    },
    "74":{
        a: 0,
        b: 2
    },
    "75":{
        a: 2,
        b: 0
    }
}

function tfFormula(fields:Record<string,"a"|"b">){
    let t:number = 0;
    let f:number = 0;
    for(let index = 51; index<=75; index++){
        const field = fields[`${index}`];
        t = t + tData[`${index}`][field]
        f = f + fData[`${index}`][field]
    }

    return {t, f , max: Math.max(t, f)}

}
console.log(tfFormula(
    {
        "51":"a",
        "52":"b",
        "53":"b",
        "54":"b",
        "55":"b",
        "56":"a",
        "57":"a",
        "58":"a",
        "59":"a",
        "60":"b",
        "61":"a",
        "62":"b",
        "63":"a",
        "64":"b",
        "65":"a",
        "66":"b",
        "67":"b",
        "68":"b",
        "69":"b",
        "70":"b",
        "71":"a",
        "72":"a",
        "73":"a",
        "74":"a",
        "75":"a",
    }
    
    ));