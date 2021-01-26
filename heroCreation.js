var warrior = {
  name: "Rand",
  class: "warrior",
  level: 1,
  xp: 0,
  strength: 8,
  speed: 2,
  armor: 6,
  maxHP: 50,
  currentHP: 50,
  maxMana: 5,
  currentMana: 5
};

var ranger = {
  name: "Kearen",
  class: "ranger",
  level: 1,
  xp: 0,
  strength: 4,
  speed: 7,
  armor: 4,
  maxHP: 40,
  currentHP: 40,
  maxMana: 15,
  currentMana: 15
};

var wizard = {
name: "Hadriel",
class: "wizard",
level: 1,
xp: 0,
strength: 2,
speed: 5,
armor: 2,
maxHP: 35,
currentHP: 35,
maxMana: 40,
currentMana: 40
};

function fillHeroTable() {
  document.getElementById("warriorName").innerHTML = warrior.name;
  document.getElementById("rangerName").innerHTML = ranger.name;
  document.getElementById("wizardName").innerHTML = wizard.name;
  document.getElementById("warriorLevel").innerHTML = warrior.level;
  document.getElementById("rangerLevel").innerHTML = ranger.level;
  document.getElementById("wizardLevel").innerHTML = wizard.level;
  document.getElementById("warriorXP").innerHTML = warrior.xp;
  document.getElementById("rangerXP").innerHTML = ranger.xp;
  document.getElementById("wizardXP").innerHTML = wizard.xp;
  document.getElementById("warriorStrength").innerHTML = warrior.strength;
  document.getElementById("rangerStrength").innerHTML = ranger.strength;
  document.getElementById("wizardStrength").innerHTML = wizard.strength;
  document.getElementById("warriorSpeed").innerHTML = warrior.speed;
  document.getElementById("rangerSpeed").innerHTML = ranger.speed;
  document.getElementById("wizardSpeed").innerHTML = wizard.speed;
  document.getElementById("warriorArmor").innerHTML = warrior.armor;
  document.getElementById("rangerArmor").innerHTML = ranger.armor;
  document.getElementById("wizardArmor").innerHTML = wizard.armor;
  document.getElementById("warriorHP").innerHTML = warrior.currentHP + "/" + warrior.maxHP;
  document.getElementById("rangerHP").innerHTML = ranger.currentHP + "/" + ranger.maxHP;
  document.getElementById("wizardHP").innerHTML = wizard.currentHP + "/" + wizard.maxHP;
  document.getElementById("warriorMana").innerHTML = warrior.currentMana + "/" + warrior.maxMana;
  document.getElementById("rangerMana").innerHTML = ranger.currentMana + "/" + ranger.maxMana;
  document.getElementById("wizardMana").innerHTML = wizard.currentMana + "/" + wizard.maxMana;
}
