import { reverse } from "../NEOPIR/reverse";

export function Approach(fields: Record<string, number>) {
  const Approach = fields["1"]+fields["13"]+fields["25"]+fields["37"]+fields["49"]+fields["61"]+fields["73"]+fields["85"]+fields["97"]+fields["109"]+
  reverse(fields["7"]) +reverse(fields["19"]) +reverse(fields["31"]) +reverse(fields["43"]) +reverse(fields["55"]) +reverse(fields["67"]) +reverse(fields["79"]) +reverse(fields["91"]) +reverse(fields["103"]) +reverse(fields["115"]);
  if(Approach<11){
    return "low"
  }
  if(11<=Approach && Approach<25){
    return "average"
  }
  if(25<=Approach && Approach<=40){
    return "high score"
  }

}
export function ActiveAvoidance(fields: Record<string, number>) {
  const ActiveAvoidance = fields["8"]+fields["20"]+fields["32"]+fields["44"]+fields["56"]+fields["68"]+fields["80"]+fields["92"]+fields["104"]+fields["116"]+
  reverse(fields["110"]) +reverse(fields["98"]) +reverse(fields["86"]) +reverse(fields["74"]) +reverse(fields["62"]) +reverse(fields["50"]) +reverse(fields["38"]) +reverse(fields["26"]) +reverse(fields["14"]) +reverse(fields["2"]);
  if(ActiveAvoidance<17){
    return "low"
  }
  if(17<=ActiveAvoidance && ActiveAvoidance<30){
    return "average"
  }
  if(30<=ActiveAvoidance && ActiveAvoidance<=40){
    return "high score"
  }

}export function PassiveAvoidance(fields: Record<string, number>) {
  const PassiveAvoidance = fields["3"]+fields["15"]+fields["27"]+fields["39"]+fields["51"]+fields["63"]+fields["75"]+fields["87"]+fields["99"]+fields["111"]+
  reverse(fields["9"]) +reverse(fields["21"]) +reverse(fields["33"]) +reverse(fields["45"]) +reverse(fields["57"]) +reverse(fields["69"]) +reverse(fields["81"]) +reverse(fields["93"]) +reverse(fields["105"]) +reverse(fields["117"]);
  if(PassiveAvoidance<11){
    return "low"
  }
  if(11<=PassiveAvoidance && PassiveAvoidance<24){
    return "average"
  }
  if(24<=PassiveAvoidance && PassiveAvoidance<=40){
    return "high score"
  }

}export function Extinction(fields: Record<string, number>) {
  const Extinction = fields["10"]+fields["22"]+fields["34"]+fields["46"]+fields["58"]+fields["70"]+fields["82"]+fields["94"]+fields["106"]+fields["118"]+
  reverse(fields["4"]) +reverse(fields["16"]) +reverse(fields["28"]) +reverse(fields["40"]) +reverse(fields["52"]) +reverse(fields["64"]) +reverse(fields["76"]) +reverse(fields["88"]) +reverse(fields["100"]) +reverse(fields["112"]);
  if(Extinction<13){
    return "low"
  }
  if(13<=Extinction && Extinction<26){
    return "average"
  }
  if(26<=Extinction && Extinction<=40){
    return "high score"
  }

}
export function Fight(fields: Record<string, number>) {
  const Fight = fields["5"]+fields["17"]+fields["29"]+fields["41"]+fields["53"]+fields["65"]+fields["77"]+fields["89"]+fields["101"]+fields["113"]+
  reverse(fields["11"]) +reverse(fields["23"]) +reverse(fields["35"]) +reverse(fields["47"]) +reverse(fields["59"]) +reverse(fields["71"]) +reverse(fields["83"]) +reverse(fields["95"]) +reverse(fields["107"]) +reverse(fields["119"]);
  if(Fight<12){
    return "low"
  }
  if(12<=Fight && Fight<26){
    return "average"
  }
  if(26<=Fight && Fight<=40){
    return "high score"
  }

}export function Flight(fields: Record<string, number>) {
  const Flight = fields["12"]+fields["24"]+fields["36"]+fields["48"]+fields["60"]+fields["72"]+fields["84"]+fields["96"]+fields["108"]+fields["120"]+
  reverse(fields["6"]) +reverse(fields["18"]) +reverse(fields["30"]) +reverse(fields["42"]) +reverse(fields["54"]) +reverse(fields["66"]) +reverse(fields["78"]) +reverse(fields["90"]) +reverse(fields["102"]) +reverse(fields["114"]);
  if(Flight<11){
    return "low"
  }
  if(11<=Flight && Flight<24){
    return "average"
  }
  if(24<=Flight && Flight<=40){
    return "high score"
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
