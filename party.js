var isAttacking = true;
var attackingHero;
var targetedEnemy;

function heroBasicAttack(x) {
  attackingHero = heroList[x];
  console.log(attackingHero);
  toggleAttacking();
}

function targetEnemy(y) {
  if (isAttacking) {
    targetedEnemy = creatureList[y];
    console.log(targetedEnemy);
  }
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
    document.getElementById("c1Name").disabled = false;
    document.getElementById("c2Name").disabled = false;
    document.getElementById("c3Name").disabled = false;
    document.getElementById("c4Name").disabled = false;
  }
}
