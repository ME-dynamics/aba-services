const eData: Record<string, { a: number; b: number; c: number; d: number }> = {
  "1": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "2": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "3": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "4": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "5": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "6": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "7": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "8": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "9": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "10": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "11": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "12": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "13": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "14": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "15": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "16": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "17": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "18": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "19": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "20": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },
  "21": {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  },

};


export function eiFormula(fields: Record<string, "a" | "b"|"c"|"d">) {
  let sum = 0;
  
  for (let index = 1; index <= 21; index++) {
    const field = fields[`${index}`];
    sum = sum + eData[`${index}`][field];
  }
  if(sum<=7 ){
    return "hich";
  }
  if(sum>7 && sum<=15){
return "khafif"
  }
  if(sum>15 && sum<=25){
    return "motevaset"
  }
  if(sum>25 && sum<=63){
    return "shadid"
  }
}

// console.log(eiFormula(
//     {
//         "1":"b",
//         "2":"a",
//         "3":"b",
//         "4":"b",
//         "5":"b",
//         "6":"a",
//         "7":"b",
//         "8":"b",
//         "9":"b",
//         "10":"b",
//         "11":"b",
//         "12":"a",
//         "13":"a",
//         "14":"a",
//         "15":"b",
//         "16":"b",
//         "17":"a",
//         "18":"a",
//         "19":"b",
//         "20":"b",
//         "21":"a",
//         "22":"a",
//         "23":"a",
//         "24":"b",
//         "25":"a",
//     }

//     ));
