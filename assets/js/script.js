//Update party members stats info every second
setInterval(
  function setpartymemberstats(){
    //Divide by 1000 to convert to seconds
    //Tank
    document.getElementById("Player1DamageInfoText").innerHTML = "Damage: " + Tank.damage;
    document.getElementById("Player1ASInfoText").innerHTML = "Atk speed: " + Tank.attackspeed / 1000 + "s";
    document.getElementById("Player1DRInfoText").innerHTML = "Dmg reduction: " + Tank.reduction;
    document.getElementById("Player1RegenInfoText").innerHTML = "Regen: " + Tank.regen;
    //Healer
    document.getElementById("Player2HealingInfoText").innerHTML = "Healing: " + Healer.healing;
    document.getElementById("Player2ASInfoText").innerHTML = "Atk speed: " + Healer.attackspeed / 1000 + "s";
    document.getElementById("Player2DRInfoText").innerHTML = "Dmg reduction " + Healer.reduction;
    document.getElementById("Player3RegenInfoText").innerHTML = "Regen: " + Healer.regen;
    //DPS
    document.getElementById("Player3DamageInfoText").innerHTML = "Damage: " + DPS.damage;
    document.getElementById("Player3ASInfoText").innerHTML = "Atk speed: " + DPS.attackspeed / 1000 + "s";
    document.getElementById("Player3DRInfoText").innerHTML = "Dmg reduction: " + DPS.reduction;
    document.getElementById("Player3RegenInfoText").innerHTML = "Regen: " + DPS.regen;
  }, 1000);

//Select a member from an array list to choose which member will be attacked by an enemy randomly
function selectrandommember(arr){
  const randommember = Math.floor(Math.random() * MemberList.length);
  const chosenmember = arr[randommember];
  return chosenmember;
  }

function enemyrandomattack(){
  var tankhealthprogressbar = document.getElementById("Player1HealthBarId");
  console.log(Tank.health);

  window.enemyattackinterval = setInterval(() => {

    if(Tank.health > 0){
      Tank.health -= ActiveEnemy.damage;
      console.log(Tank.health);
    }
    tankhealthprogressbar.setAttribute("value", Tank.health);
    tankhealthprogressbar.setAttribute("max", Tank.maxhealth);
    tankhealthprogressbar.setAttribute("data-label", Tank.health + "/" + Tank.maxhealth);



  }, ActiveEnemy.attackspeed);
}

//Set up our combat attack timers
function tankattackenemy(){
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  var tankexpprogressbar = document.getElementById("TankExpBarId");
  var dpsexpprogressbar = document.getElementById("DPSExpBarId");


  window.tankattackinterval = setInterval(() => {
    if(ActiveEnemy.health > 0  && Tank.health > 0 ){
      ActiveEnemy.health -= Tank.damage;
    }

    enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
    enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
    enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);

    if(ActiveEnemy.health <= 0){
      document.getElementById("SelectZoneBeforeTextId").innerHTML = "loading...";
      setTimeout(startCombat, 600);
      clearInterval(window.tankattackinterval);
      clearInterval(window.dpsattackinterval);
      clearInterval(window.enemyattackinterval);
      enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
      enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
      enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);
      var sharedExp = ActiveEnemy.expReward / membersActive.totalmembers;
      if(membersActive.tank == 1){
        Tank.exp += sharedExp;
      }
      if(membersActive.dps == 1){
        DPS.exp += sharedExp;
      }
    }
  }, Tank.attackspeed);
}

function dpsattackenemy(){
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  var tankexpprogressbar = document.getElementById("TankExpBarId");
  var dpsexpprogressbar = document.getElementById("DPSExpBarId");

  window.dpsattackinterval = setInterval(() => {
    if(ActiveEnemy.health > 0 && DPS.health > 0 ){
      ActiveEnemy.health -= DPS.damage;
    }

    enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
    enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
    enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);

    if(ActiveEnemy.health <= 0){
      document.getElementById("SelectZoneBeforeTextId").innerHTML = "loading...";
      setTimeout(startCombat, 600);
      clearInterval(window.tankattackinterval);
      clearInterval(window.dpsattackinterval);
      clearInterval(window.enemyattackinterval);
      enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
      enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
      enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);
      var sharedExp = ActiveEnemy.expReward / membersActive.totalmembers;
      if(membersActive.tank == 1){
        Tank.exp += sharedExp;
      }
      if(membersActive.dps == 1){
        DPS.exp += sharedExp;
      }
    }
  }, DPS.attackspeed);
}

//Function for selecting the elwynn forest zone button
function selectelwynnforestzone(){

  memberSelected.tank = 0;
  memberSelected.healer = 0;
  memberSelected.dps = 0;
  if(sendOutMemberBoxVisibility == 0){
    sendOutMemberBoxVisibility = 1;
    document.getElementById("SelectPartyMemberContainerId").style.visibility = "visible";
    document.getElementById("SelectTank").style.visibility = "visible";
    document.getElementById("SelectHealer").style.visibility = "visible";
    document.getElementById("SelectDPS").style.visibility = "visible";

  }else{
    sendOutMemberBoxVisibility = 0;
    document.getElementById("SelectPartyMemberContainerId").style.visibility = "hidden";
    document.getElementById("SelectTank").style.visibility = "hidden";
    document.getElementById("SelectHealer").style.visibility = "hidden";
    document.getElementById("SelectDPS").style.visibility = "hidden";
  }

  //check if a member is in use already
  if(membersActive.tank == 0){
    document.getElementById("SelectTank").style.border = "initial";
  }else{
    document.getElementById("SelectTank").style.border = "1px solid red";
  }
  if(membersActive.healer == 0){
    document.getElementById("SelectHealer").style.border = "initial";
  }else{
    document.getElementById("SelectHealer").style.border = "1px solid red";
  }
  if(membersActive.dps == 0){
    document.getElementById("SelectDPS").style.border = "initial";
  }else{
    document.getElementById("SelectDPS").style.border = "1px solid red";
  }

}
//Selecting party members
function SelectTankMember(){
  if(memberSelected.tank == 0){
    //1=combat
    memberSelected.tank = 1
    document.getElementById("SelectTank").style.border = "1px solid red";
  }else{
    memberSelected.tank = 0
    document.getElementById("SelectTank").style.border = "initial";
  }
}
function SelectHealerMember(){
  if(memberSelected.healer == 0){
    //1=combat
    memberSelected.healer = 1
    document.getElementById("SelectHealer").style.border = "1px solid red";
  }else{
    memberSelected.healer = 0
    document.getElementById("SelectHealer").style.border = "initial";
  }
}
function SelectDPSMember(){
  if(memberSelected.dps == 0){
    //1=combat
    memberSelected.dps = 1
    document.getElementById("SelectDPS").style.border = "1px solid red";
  }else{
    memberSelected.dps = 0
    document.getElementById("SelectDPS").style.border = "initial";
  }
}

function startCombat(){
  inCombat = 1;
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  document.querySelectorAll(".enemybattlevisibility").forEach(a=>a.style.visibility = "visible");
  document.getElementById("SelectZoneBeforeTextId").innerHTML = ElwynnForestEnemies[randomelwynnenemy];
  ActiveEnemy.health = ActiveEnemy.maxhealth;
  enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
  enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
  enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);
  var tankexpprogressbar = document.getElementById("TankEXPBarId");
  var dpsexpprogressbar = document.getElementById("DPSExpBarId");
  tankexpprogressbar.setAttribute("value", Tank.exp);
  tankexpprogressbar.setAttribute("max", Tank.expToLevel);
  tankexpprogressbar.setAttribute("data-label", Tank.exp + "/" + Tank.expToLevel);
  dpsexpprogressbar.setAttribute("value", DPS.exp);
  dpsexpprogressbar.setAttribute("max", DPS.expToLevel);
  dpsexpprogressbar.setAttribute("data-label", DPS.exp + "/" + DPS.expToLevel);

  //Check which enemy spawned, then assign its values
  if(randomelwynnenemy == 0){
    ActiveEnemy = Kobold;
  }
  if(randomelwynnenemy == 1){
    ActiveEnemy = Spider;
  }
  if(randomelwynnenemy == 2){
    ActiveEnemy = Bear;
  }
  if(randomelwynnenemy == 3){
    ActiveEnemy = Murloc;
  }
  if(randomelwynnenemy == 4){
    ActiveEnemy = Wolf;
  }

  if(membersActive.tank == 1){
    tankattackenemy();
  }

  if(membersActive.dps == 1){
    dpsattackenemy();
  }

  enemyrandomattack();

}
function stopCombat(){
  document.querySelectorAll(".enemybattlevisibility").forEach(a=>a.style.visibility = "hidden");
  document.getElementById("SelectZoneBeforeTextId").innerHTML = "Select a zone first!"
  inCombat = 0;
  memberSelected.tank = 0
  membersActive.totalmembers = 0;


  if(membersActive.tank == 1){
    membersActive.tank = 0;
    memberSelected.tank = 0;
  }
  if(membersActive.healer == 1){
    membersActive.healer = 0;
    memberSelected.healer = 0;
  }
  if(membersActive.dps == 1){
    membersActive.dps = 0;
    memberSelected.dps = 0;
  }

  clearInterval(window.tankattackinterval);
  clearInterval(window.dpsattackinterval);
  document.getElementById("player1_battle_info_div_id").style.visibility = "hidden";
  document.getElementById("player3_battle_info_div_id").style.visibility = "hidden";



  inCombat = 0;
}

function SendOutMembers(){
  sendOutMemberBoxVisibility = 0;

  document.getElementById("SelectPartyMemberContainerId").style.visibility = "hidden";
  document.getElementById("SelectTank").style.visibility = "hidden";
  document.getElementById("SelectHealer").style.visibility = "hidden";
  document.getElementById("SelectDPS").style.visibility = "hidden";
  document.getElementById("loader").style.display = "visible";


  if(memberSelected.tank >= 1){
    membersActive.tank = 1;
    membersActive.totalmembers += 1;
    document.getElementById("player1_battle_info_div_id").style.visibility = "visible";
  }

  if(memberSelected.dps >= 1){
    membersActive.dps = 1;
    membersActive.totalmembers += 1;
    document.getElementById("player3_battle_info_div_id").style.visibility = "visible";

  }

  if(memberSelected.tank >= 1 || memberSelected.healer >= 1 || memberSelected.dps >= 1){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = "loading...";
    setTimeout(startCombat, 600);
  }
}
