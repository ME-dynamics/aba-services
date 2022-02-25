import { formula1 } from "./rawScore/formula1";
import { formula2A } from "./rawScore/formula2A";
import { formula2B } from "./rawScore/formula2B";
import { formula3 } from "./rawScore/formula3";
import { formula4 } from "./rawScore/formula4";
import { formula5 } from "./rawScore/formula5";
import { formula6A } from "./rawScore/formula6A";
import { formula6B } from "./rawScore/formula6B";
import { formula7 } from "./rawScore/formula7";
import { formula8A } from "./rawScore/formula8A";
import { formula8B } from "./rawScore/formula8B";
import { formulaA } from "./rawScore/formulaA";
import { formulaB } from "./rawScore/formulaB";
import { formulaC } from "./rawScore/formulaC";
import { formulaCC } from "./rawScore/formulaCC";
import { formulaD } from "./rawScore/formulaD";
import { formulaH } from "./rawScore/formulaH";
import { formulaN } from "./rawScore/formulaN";
import { formulaP } from "./rawScore/formulaP";
import { formulaPP } from "./rawScore/formulaPP";
import { formulaR } from "./rawScore/formulaR";
import { formulaS } from "./rawScore/formulaS";
import { formulaSS } from "./rawScore/formulaSS";
import { formulaT } from "./rawScore/formulaT";
import { formulaV } from "./rawScore/formulaV";
import { formulaX } from "./rawScore/formulaX";
import { formulaY } from "./rawScore/formulaY";
import { formulaZ } from "./rawScore/formulaZ";
import { brMen } from "./br/brMen";
import { brWomen } from "./br/brWomen";
import { xToBr as xToMenBr } from "./br/xMen";
import { xToBr as xToWomenBr } from "./br/xWomen";
export function buildMakeMCMI() {
  return function makeMBTI(fields: Record<string, number>) {
    const one = formula1(fields);
    const twoA = formula2A(fields);
    const twoB = formula2B(fields);
    const three = formula3(fields);
    const four = formula4(fields);
    const five = formula5(fields);
    const sixA = formula6A(fields);
    const sixB = formula6B(fields);
    const seven = formula7(fields);
    const eightA = formula8A(fields);
    const eightB = formula8B(fields);
    const a = formulaA(fields);
    const b = formulaB(fields);
    const c = formulaC(fields);
    const cc = formulaCC(fields);
    const d = formulaD(fields);
    const h = formulaH(fields);
    const n = formulaN(fields);
    const p = formulaP(fields);
    const pp = formulaPP(fields);
    const r = formulaR(fields);
    const s = formulaS(fields);
    const ss = formulaSS(fields);
    const t = formulaT(fields);
    const v = formulaV(fields);
    const y = formulaY(fields);
    const z = formulaZ(fields);
    const x = formulaX({
      one,
      twoA,
      twoB,
      three,
      four,
      five,
      eightA,
      eightB,
      seven,
      sixA,
      sixB,
    });
    const menBaseRate = {
      one: brMen["1"][`${one}`],
      twoA: brMen["2A"][`${twoA}`],
      twoB: brMen["2B"][`${twoB}`],
      three: brMen["3"][`${three}`],
      four: brMen["4"][`${four}`],
      five: brMen["5"][`${five}`],
      sixA: brMen["6A"][`${sixA}`],
      sixB: brMen["6B"][`${sixB}`],
      seven: brMen["7"][`${seven}`],
      eightA: brMen["8A"][`${eightA}`],
      eightB: brMen["8B"][`$${eightB}`],
      A: brMen["A"][`${a}`],
      B: brMen["B"][`${b}`],
      C: brMen["C"][`${c}`],
      CC: brMen["CC"][`${cc}`],
      D: brMen["D"][`${d}`],
      H: brMen["H"][`${h}`],
      N: brMen["N"][`${n}`],
      P: brMen["P"][`${p}`],
      PP: brMen["PP"][`${pp}`],
      R: brMen["R"][`${r}`],
      S: brMen["S"][`${s}`],
      SS: brMen["SS"][`${ss}`],
      T: brMen["T"][`${t}`],
      V: brMen["V"][`${v}`],
      X: xToMenBr(x),
      Y: brMen["Y"][`${y}`],
      Z: brMen["Z"][`${z}`],
    };
    const womenBaseRate = {
      one: brWomen["1"][`${one}`],
      twoA: brWomen["2A"][`${twoA}`],
      twoB: brWomen["2B"][`${twoB}`],
      three: brWomen["3"][`${three}`],
      four: brWomen["4"][`${four}`],
      five: brWomen["5"][`${five}`],
      sixA: brWomen["6A"][`${sixA}`],
      sixB: brWomen["6B"][`${sixB}`],
      seven: brWomen["7"][`${seven}`],
      eightA: brWomen["8A"][`${eightA}`],
      eightB: brWomen["8B"][`$${eightB}`],
      A: brWomen["A"][`${a}`],
      B: brWomen["B"][`${b}`],
      C: brWomen["C"][`${c}`],
      CC: brWomen["CC"][`${cc}`],
      D: brWomen["D"][`${d}`],
      H: brWomen["H"][`${h}`],
      N: brWomen["N"][`${n}`],
      P: brWomen["P"][`${p}`],
      PP: brWomen["PP"][`${pp}`],
      R: brWomen["R"][`${r}`],
      S: brWomen["S"][`${s}`],
      SS: brWomen["SS"][`${ss}`],
      T: brWomen["T"][`${t}`],
      V: brWomen["V"][`${v}`],
      X: xToWomenBr(x),
      Y: brWomen["Y"][`${y}`],
      Z: brWomen["Z"][`${z}`],
    };
    return {
      menBaseRate,
      womenBaseRate,
      rawScore: {
        one,
        twoA,
        twoB,
        three,
        four,
        five,
        sixA,
        sixB,
        seven,
        eightA,
        eightB,
        a,
        b,
        c,
        cc,
        d,
        h,
        n,
        p,
        pp,
        r,
        s,
        ss,
        t,
        v,
        x,
        y,
        z,
      },
    };
  };
}

export { testStructure as mcmiStructure } from "./testStructure";
