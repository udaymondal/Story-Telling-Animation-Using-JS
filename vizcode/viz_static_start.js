// for more info see https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry/cc-7th-area-circ-challenge/v/radius-change-impact

const delay = 5000; //number of milliseconds to wait before updating the explaination text
const vizContainer = document.querySelector("#vizContainer");
const explainationContainer = document.querySelector("#explainationContainer");
const explainationText = document.querySelector("#explainationText");
const explainationAmount = document.querySelector("#explainationAmount");
const dataset = [{"title":"live within 50mi of a nuclear plant for a year", "measurement": 0.09, "multiplier": 2180, "color": "#80ffff"}, //cyan
               {"title":"eat a single banana", "measurement": 0.1, "multiplier": 1965, "color": "#8095ff"}, //blue
               {"title":"receive a dental x-ray", "measurement": 5, "multiplier": 39, "color": "#d480ff"}, //purple
               {"title":"be on one airline flight from NY to LA", "measurement": 40, "multiplier": 4.9, "color": "#ff80bf"}, //pink
               {"title":"sleep directly ontop of a nuclear plant for a year", "measurement": 250, "multiplier": 0.78,"color": "#ffaa80"}, //orange
               {"title":"receive a single mamogram", "measurement": 400, "multiplier": 0.49, "color": "#eaff80"}, //yellow
               {"title":"receive a single chest CT scan", "measurement": 7000, "multiplier": 0.028, "color": "#80ff80"} //green
            ];
const defaultMultiplier = dataset[0].multiplier; // 2180, keeps a reference to the multiplier value of the first entry