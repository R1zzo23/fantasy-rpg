var creatureList = [];

var wolf = {
  name: "Wolf",
  level: 1,
  strength: 7,
  speed: 15,
  armor: 6,
  hp: 20,
};

var goblin = {
  name: "Goblin",
  level: 1,
  strength: 7,
  speed: 9,
  armor: 12,
  hp: 25,
};

var troll = {
  name: "Troll",
  level: 1,
  strength: 15,
  speed: 3,
  armor: 13,
  hp: 50,
};

var grizzly = {
  name: "Grizzly",
  level: 2,
  strength: 18,
  speed: 4,
  armor: 7,
  hp: 65,
};

var creature1 = wolf;
var creature2 = goblin;
var creature3 = troll;
var creature4 = grizzly;

creatureList.push(creature1);
creatureList.push(creature2);
creatureList.push(creature3);
creatureList.push(creature4);

function printCreatureList() {
  console.log(creatureList);
}

function fillCreatureTable() {
  document.getElementById("c1Name").innerHTML = creatureList[0].name;
  document.getElementById("c2Name").innerHTML = creatureList[1].name;
  document.getElementById("c3Name").innerHTML = creatureList[2].name;
  document.getElementById("c4Name").innerHTML = creatureList[3].name;
  document.getElementById("c1Level").innerHTML = creatureList[0].level;
  document.getElementById("c2Level").innerHTML = creatureList[1].level;
  document.getElementById("c3Level").innerHTML = creatureList[2].level;
  document.getElementById("c4Level").innerHTML = creatureList[3].level;
  document.getElementById("c1Strength").innerHTML = creatureList[0].strength;
  document.getElementById("c2Strength").innerHTML = creatureList[1].strength;
  document.getElementById("c3Strength").innerHTML = creatureList[2].strength;
  document.getElementById("c4Strength").innerHTML = creatureList[3].strength;
  document.getElementById("c1Speed").innerHTML = creatureList[0].speed;
  document.getElementById("c2Speed").innerHTML = creatureList[1].speed;
  document.getElementById("c3Speed").innerHTML = creatureList[2].speed;
  document.getElementById("c4Speed").innerHTML = creatureList[3].speed;
  document.getElementById("c1Armor").innerHTML = creatureList[0].armor;
  document.getElementById("c2Armor").innerHTML = creatureList[1].armor;
  document.getElementById("c3Armor").innerHTML = creatureList[2].armor;
  document.getElementById("c4Armor").innerHTML = creatureList[3].armor;
  document.getElementById("c1HP").innerHTML = creatureList[0].hp;
  document.getElementById("c2HP").innerHTML = creatureList[1].hp;
  document.getElementById("c3HP").innerHTML = creatureList[2].hp;
  document.getElementById("c4HP").innerHTML = creatureList[3].hp;
}
