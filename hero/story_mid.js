//Setup website here
let hero = document.querySelector("#hero");
let villian = document.querySelector("#villian");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
let lightningEnd   = {"left": "900px"};
let options        = {"duration": 800};

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options);