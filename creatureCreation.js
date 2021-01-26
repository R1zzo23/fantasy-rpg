var creatureList = [];

var wolf = {
  name: "Wolf",
  level: 1,
  strength: 4,
  speed: 7,
  armor: 3,
  hp: 20,
};

var goblin = {
  name: "Goblin",
  level: 1,
  strength: 3,
  speed: 5,
  armor: 5,
  hp: 25,
};

var troll = {
  name: "Troll",
  level: 1,
  strength: 7,
  speed: 1,
  armor: 6,
  hp: 50,
};

var grizzly = {
  name: "Grizzly",
  level: 2,
  strength: 9,
  speed: 2,
  armor: 4,
  hp: 65,
};

creatureList.push(wolf);
creatureList.push(goblin);
creatureList.push(troll);
creatureList.push(grizzly);

function printCreatureList() {
  console.log(creatureList);
}
