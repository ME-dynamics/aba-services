const jData : Record<string,{a:number , b:number}> = {
    "76": {
        a: 1,
        b: 0
    },
    "77": {
        a: 2,
        b: 0
    },
    "78": {
        a: 0,
        b: 1
    },
    "79": {
        a: 2,
        b: 0
    },
    "80": {
        a: 1,
        b: 0
    },
    "81": {
        a: 2,
        b: 0
    },
    "82": {
        a: 2,
        b: 0
    },
    "83": {
        a: 2,
        b: 0
    },
    "84": {
        a: 2,
        b: 0
    },
    "85": {
        a: 2,
        b: 0
    },
    "86": {
        a: 1,
        b: 0
    },
    "87": {
        a: 1,
        b: 0
    },
 
    
}
const pData:Record<string,{a:number , b:number}>={
    "76": {
        a: 0,
        b: 2
    },
    "77": {
        a: 0,
        b: 2
    },
    "78": {
        a: 1,
        b: 0
    },
    "79": {
        a: 0,
        b: 1
    },
    "80": {
        a: 0,
        b: 2
    },
    "81": {
        a: 0,
        b: 0
    },
    "82": {
        a: 0,
        b: 1
    },
    "83": {
        a: 0,
        b: 2
    },
    "84": {
        a: 0,
        b: 2
    },
    "85": {
        a: 0,
        b: 2
    },
    "86": {
        a: 0,
        b: 1
    },
    "87": {
        a: 0,
        b: 2
    },
   
}

function jpFormula(fields:Record<string,"a"|"b">){
    let j:number = 0;
    let p:number = 0;
    for(let index = 76; index<=87; index++){
        const field = fields[`${index}`];
        j = j + jData[`${index}`][field]
        p = p + pData[`${index}`][field]
    }

    return {j, p , max: Math.max(j, p)}

}
console.log(jpFormula(
    {
        "76":"a",
        "77":"b",
        "78":"a",
        "79":"a",
        "80":"a",
        "81":"b",
        "82":"a",
        "83":"a",
        "84":"a",
        "85":"a",
        "86":"b",
        "87":"a",
    }
    
    ));