10 > 20 || (30 < 89) & true || !false;
//false || (true && true) || true;
//true && true;
//true;

let Adult = 2;
let Infant = 3;
let isAllowed = Infant <= Adult;
switch (isAllowed) {
  case true:
    console.log("Allowed");
    break;
  case false:
    console.log("Not Allowed");
    break;
}
30 > 20 ? console.log("True Statement") : console.log("False Statement");
