var heroChosen;

function identifySpecialMoveBeingUsed(x) {
  var nameOfSpecial;
  if (x === 0) {
    nameOfSpecial = document.getElementById("warriorSpecial").innerHTML;
    heroChosen = 0;
  }
  else if (x === 1) {
    nameOfSpecial = document.getElementById("rangerSpecial").innerHTML;
    heroChosen = 1;
  }
  else {
    nameOfSpecial = document.getElementById("wizardSpecial").innerHTML;
    heroChosen = 2;
  }
  console.log(nameOfSpecial);
  specialAttackHub(nameOfSpecial);
}

function specialAttackHub(name) {
  if (name === "Bash") bash();
  else if (name === "Guided Shot") guidedShot();
  else if (name === "Fire Ball") fireBall();

  if (heroList[heroChosen].currentMana >= manaUsed)
    heroBasicAttack(heroChosen);
  else alert("Not enough mana.");
}

function basic(x) {
  attackModifier = 0;
  strengthModifier = 0;
  armorModifier = 0;
  manaUsed = 0;
  heroBasicAttack(x);
}

function bash() {
  attackModifier = 6;
  strengthModifier = 0;
  armorModifier = 0;
  manaUsed = 3;
}

function guidedShot() {
  attackModifier = 0;
  strengthModifier = 0;
  armorModifier = -4;
  manaUsed = 4;
}

function fireBall() {
  attackModifier = 0;
  strengthModifier = heroList[heroChosen].strength;
  armorModifier = 0;
  manaUsed = 5;

}
