var battleOrderList = [];

function createOrder(){
  heroList.forEach((item) => {
    battleOrderList.push(item);
  });

  creatureList.forEach((item) => {
    battleOrderList.push(item);
  });

  battleOrderList.sort((a, b) => (a.speed < b.speed) ? 1 : -1)

  for (var i = 0; i < battleOrderList.length; i++) {
    console.log(i + ") " + battleOrderList[i].name + " - " + battleOrderList[i].speed);
  }
}

function displayCombatOrder() {
  var text = "";
  for (var i = 0; i < battleOrderList.length; i++) {
    text += battleOrderList[i].name + "<br>";
  }
  document.getElementById("combatOrder").innerHTML = text;
}
