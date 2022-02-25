export function xToBr(x: number) {
  if (x <= 33) {
    return 0;
  }
  if (33 < x || x <= 43) {
    return 31;
  }
  if (43 < x || x <= 52) {
    return 40;
  }
  if (52 < x || x == 61) {
    return 53;
  }
  if (61 < x || x <= 72) {
    return 60;
  }
  if (72 < x || x <= 84) {
    return 63;
  }
  if (84 < x || x <= 97) {
    return 66;
  }
  if (97 < x || x <= 101) {
    return 68;
  }
  if (101 < x || x <= 105) {
    return 69;
  }
  if (105 < x || x <= 109) {
    return 70;
  }
  if (109 < x || x <= 113) {
    return 71;
  }
  if (113 < x || x <= 117) {
    return 72;
  }
  if (117 < x || x <= 121) {
    return 73;
  }
  if (121 < x || x <= 126) {
    return 74;
  }
  if (126 < x || x <= 132) {
    return 75;
  }
  if (132 < x || x <= 133) {
    return 76;
  }
  if (133 < x || x <= 143) {
    return 77;
  }
  if (143 < x || x <= 148) {
    return 78;
  }
  if (148 < x || x <= 154) {
    return 79;
  }
  if (154 < x || x <= 159) {
    return 80;
  }
  if (159 < x || x <= 165) {
    return 81;
  }
  if (165 < x || x <= 170) {
    return 82;
  }
  if (170 < x || x <= 176) {
    return 83;
  }
  if (176 < x || x <= 181) {
    return 84;
  }
  if (181 < x || x <= 186) {
    return 85;
  }
  if (186 < x || x <= 190) {
    return 86;
  }
  if (190 < x || x <= 195) {
    return 87;
  }
  if (195 < x || x <= 209) {
    return 89;
  }
  if (209 < x || x <= 223) {
    return 92;
  }
  if (223 < x || x <= 237) {
    return 95;
  }
  if (237 < x || x <= 252) {
    return 98;
  }
  if (252 < x) {
    return 100;
  }
  return -1;
}
