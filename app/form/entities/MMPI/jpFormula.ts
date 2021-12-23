
function shouldBeWrong(answer: number) {
  if (answer === 0) {
    return 1
  }
  return 0
}
function shouldBeCorrect(answer: number) {
  if (answer === 1) {
    return 1;
  }
  return 0;
}

export function LFormula(fields: Record<string, number>) {
  const L = shouldBeWrong(fields["16"]) + shouldBeWrong(fields["29"]) + shouldBeWrong(fields["41"]) + shouldBeWrong(fields["51"]) + shouldBeWrong(fields["77"]) + shouldBeWrong(fields["93"]) + shouldBeWrong(fields["102"]) + shouldBeWrong(fields["107"]) + shouldBeWrong(fields["123"]) + shouldBeWrong(fields["139"]) + shouldBeWrong(fields["153"]) + shouldBeWrong(fields["183"]) + shouldBeWrong(fields["203"]) + shouldBeWrong(fields["232"]) + shouldBeWrong(fields["260"]);
}
export function FFormula(fields: Record<string, number>) {
  // const F = 
}



// console.log(jpFormula(
//     {
//         "76":"a",
//         "77":"b",
//         "78":"a",
//         "79":"a",
//         "80":"a",
//         "81":"b",
//         "82":"a",
//         "83":"a",
//         "84":"a",
//         "85":"a",
//         "86":"b",
//         "87":"a",
//     }

//     ))
