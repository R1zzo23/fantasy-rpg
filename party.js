var isAttacking = true;
var attackingHero;
var targetedEnemy;
var attackDice = 10;
var attackModifier = 0;
var armorModifier = 0;
var strengthModifier = 0;
var manaUsed = 0;

function heroBasicAttack(x) {
  attackingHero = heroList[x];
  console.log(attackingHero);
  toggleAttacking();
}

function targetEnemy(y) {
  if (isAttacking) {
    targetedEnemy = creatureList[y];
    console.log(targetedEnemy);
    makeBasicAttack();
  }
}

function makeBasicAttack() {
  attackingHero.currentMana -= manaUsed;
  var damageDealt = 0;
  var heroDamage = rollDice(attackDice + attackModifier) + attackingHero.strength + strengthModifier;
  console.log("heroDamage: " + heroDamage);
  var enemyDefense = rollDice(6) + targetedEnemy.armor + armorModifier;
  console.log("enemyDefense: " + enemyDefense);
  damageDealt = heroDamage - enemyDefense;
  console.log("damageDealt: " + damageDealt);

  if (damageDealt >= 0) {
    targetedEnemy.hp -= damageDealt;
    if (targetedEnemy.hp < 0) targetedEnemy.hp = 0;
    fillCreatureTable();
    attackDice = 10;
  }
  toggleAttacking();
  fillHeroTable();
}

function rollDice(x) {
  var randomNumber = Math.floor(Math.random() * x) + 1;
  return randomNumber;
}

function toggleAttacking() {
  if (isAttacking) {
    isAttacking = false;
    document.getElementById("c1Name").disabled = true;
    document.getElementById("c2Name").disabled = true;
    document.getElementById("c3Name").disabled = true;
    document.getElementById("c4Name").disabled = true;
  }
  else {
    isAttacking = true;
    if (creatureList[0].hp > 0)
      document.getElementById("c1Name").disabled = false;
    if (creatureList[1].hp > 0)
      document.getElementById("c2Name").disabled = false;
    if (creatureList[2].hp > 0)
      document.getElementById("c3Name").disabled = false;
    if (creatureList[3].hp > 0)
      document.getElementById("c4Name").disabled = false;
  }
}
