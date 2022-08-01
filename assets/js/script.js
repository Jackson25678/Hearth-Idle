function healall(){
  Tank.health = 25;
  Healer.health = 25;
  DPS.health = 25;
  setHealthBar();
  console.log("Your members have been healed!");
}

//Update party members stats info every second
setInterval(
  function setpartymemberstats(){
    //Divide by 1000 to convert to seconds
    //Tank
    document.getElementById("Player1DamageInfoText").innerHTML = "Damage: " + Tank.damage;
    document.getElementById("Player1ASInfoText").innerHTML = "Atk speed: " + Tank.attackspeed / 1000 + "s";
    document.getElementById("Player1DRInfoText").innerHTML = "Dmg reduction: " + Tank.reduction;
    document.getElementById("Player1RegenInfoText").innerHTML = "Regen: " + Tank.regen;
    document.getElementById("TankLevelText").innerHTML = "Level: " + Tank.level;
    //Healer
    document.getElementById("Player2HealingInfoText").innerHTML = "Healing: " + Healer.healing;
    document.getElementById("Player2ASInfoText").innerHTML = "Atk speed: " + Healer.attackspeed / 1000 + "s";
    document.getElementById("Player2DRInfoText").innerHTML = "Dmg reduction " + Healer.reduction;
    document.getElementById("Player2RegenInfoText").innerHTML = "Regen: " + Healer.regen;
    //DPS
    document.getElementById("Player3DamageInfoText").innerHTML = "Damage: " + DPS.damage;
    document.getElementById("Player3ASInfoText").innerHTML = "Atk speed: " + DPS.attackspeed / 1000 + "s";
    document.getElementById("Player3DRInfoText").innerHTML = "Dmg reduction: " + DPS.reduction;
    document.getElementById("Player3RegenInfoText").innerHTML = "Regen: " + DPS.regen;

    checkForLevelUp();
    setExpBar();
  }, 1000);



function updateMob(){

  var randomelwynnenemy = Math.floor(Math.random() * ElwynnForestEnemies.length);
  var randomwestfallenemy = Math.floor(Math.random() * WestFallEnemies.length);
  var randomwetlandsenemy = Math.floor(Math.random() * WetLandsEnemies.length);

  if(selectedzone == 1){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = ElwynnForestEnemies[randomelwynnenemy];
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
  }

  if(selectedzone == 2){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = WestFallEnemies[randomwestfallenemy];
    //Check which enemy spawned, then assign its values
    if(randomwestfallenemy == 0){
      ActiveEnemy = Ghoul;
    }
    if(randomwestfallenemy == 1){
      ActiveEnemy = Cow;
    }
    if(randomwestfallenemy == 2){
      ActiveEnemy = Coyote;
    }
    if(randomwestfallenemy == 3){
      ActiveEnemy = Slark;
    }
    if(randomwestfallenemy == 4){
      ActiveEnemy = DustDevil;
    }
  }

  if(selectedzone == 3){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = WetLandsEnemies[randomwetlandsenemy];
    //Check which enemy spawned, then assign its values
    if(randomwetlandsenemy == 0){
      ActiveEnemy = CaveStalker;
    }
    if(randomwetlandsenemy == 1){
      ActiveEnemy = FenDweller;
    }
    if(randomwetlandsenemy == 2){
      ActiveEnemy = GnawBone;
    }
    if(randomwetlandsenemy == 3){
      ActiveEnemy = CursedMarine;
    }
    if(randomwetlandsenemy == 4){
      ActiveEnemy = FenLord;
    }
  }

  if(selectedzone == 4){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = WestFallEnemies[randomwestfallenemy];
    //Check which enemy spawned, then assign its values
    if(randomelwynnenemy == 0){
      ActiveEnemy = Ghoul;
    }
    if(randomelwynnenemy == 1){
      ActiveEnemy = Cow;
    }
    if(randomelwynnenemy == 2){
      ActiveEnemy = Coyote;
    }
    if(randomelwynnenemy == 3){
      ActiveEnemy = Slark;
    }
    if(randomelwynnenemy == 4){
      ActiveEnemy = DustDevil;
    }
  }


}


function addLoot(){
  //Tank
  //Elwynn
  if(Tank.currentzone == 1 || Healer.currentzone == 1 || DPS.currentzone == 1 ){
    if(randomelwynnenemy == 0){
      var copper = Math.floor(Math.random() * 5);
      User.copper += copper;
      randomelwynnenemydrop = Math.floor(Math.random() * 'Kobold.loot'.length);
      console.log(randomelwynnenemydrop);
      }
    if(randomelwynnenemy == 1){
      var copper = Math.floor(Math.random() * 5);
      User.copper += copper;
      randomelwynnenemydrop = Math.floor(Math.random() * 'Spider.loot'.length);
      console.log(randomelwynnenemydrop);
    }
    if(randomelwynnenemy == 2){
      var copper = Math.floor(Math.random() * 5);
      User.copper += copper;
      randomelwynnenemydrop = Math.floor(Math.random() * 'Bear.loot'.length);
      console.log(randomelwynnenemydrop);
    }
    if(randomelwynnenemy == 3){
      var copper = Math.floor(Math.random() * 5);
      User.copper += copper;
      randomelwynnenemydrop = Math.floor(Math.random() * 'Murloc.loot'.length);
      console.log(randomelwynnenemydrop);
    }
    if(randomelwynnenemy == 4){
      var copper = Math.floor(Math.random() * 5);
      User.copper += copper;
      randomelwynnenemydrop = Math.floor(Math.random() * 'Wolf.loot'.length);
      console.log(randomelwynnenemydrop);
    }
  }

  loot += 1;
  document.getElementById("CollectLootText").innerHTML = "Loot " + "(" + loot +"/10)" ;
}

function checkForLevelUp(){
  //Tank
  if(Tank.exp >= Tank.expToLevel){
    Tank.exp -= Tank.expToLevel;
    Tank.level = Tank.level + 1;
  }
  if(Healer.exp >= Healer.expToLevel){
    Healer.exp -= Healer.expToLevel;
    Healer.level = Healer.level + 1;
  }
  if(DPS.exp >= DPS.expToLevel){
    DPS.exp -= DPS.expToLevel;
    DPS.level = DPS.level + 1;
  }
  setExpBar();
}

function setExpBar(){
  var tankexpprogressbar = document.getElementById("TankEXPBarId");
  var dpsexpprogressbar = document.getElementById("DPSExpBarId");
  var healerexpprogressbar = document.getElementById("HealerExpBarId");
  tankexpprogressbar.setAttribute("value", Tank.exp);
  tankexpprogressbar.setAttribute("max", Tank.expToLevel);

  healerexpprogressbar.setAttribute("value", Healer.exp);
  healerexpprogressbar.setAttribute("max", Healer.expToLevel);

  dpsexpprogressbar.setAttribute("value", DPS.exp);
  dpsexpprogressbar.setAttribute("max", DPS.expToLevel);
}

function setHealthBar(){
  var tankhealthprogressbar = document.getElementById("Player1HealthBarId");
  var healerhealthprogressbar = document.getElementById("Player2HealthBarId");
  var dpshealthprogressbar = document.getElementById("Player3HealthBarId");

  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  tankhealthprogressbar.setAttribute("value", Tank.health);
  tankhealthprogressbar.setAttribute("max", Tank.maxhealth);
  tankhealthprogressbar.setAttribute("data-label", Tank.health + "/" + Tank.maxhealth);

  healerhealthprogressbar.setAttribute("value", Healer.health);
  healerhealthprogressbar.setAttribute("max", Healer.maxhealth);
  healerhealthprogressbar.setAttribute("data-label", Healer.health + "/" + Healer.maxhealth);

  dpshealthprogressbar.setAttribute("value", DPS.health);
  dpshealthprogressbar.setAttribute("max", DPS.maxhealth);
  dpshealthprogressbar.setAttribute("data-label", DPS.health + "/" + DPS.maxhealth);

  enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
  enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
  enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);
}

//Select a member from an array list to choose which member will be attacked by an enemy randomly
function selectrandommember(memberList){

  return memberList[Math.floor(Math.random()*memberList.length)];

  }

  var memberList = [];

function enemyrandomattack(){

  window.enemyattackinterval = setInterval(() => {

    partyMember = selectrandommember(memberList);

    if(partyMember == 'tank'){
      if(Tank.health > 0 && membersActive.tank == 1){
        Tank.health -= ActiveEnemy.damage;
      }
    }
    if(partyMember == 'healer'){
      if(Healer.health > 0 && membersActive.healer == 1){
        Healer.health -= ActiveEnemy.damage;
      }
    }
    if(partyMember == 'dps'){
      if(DPS.health > 0 && membersActive.dps == 1){
        DPS.health -= ActiveEnemy.damage;
      }
    }

    setHealthBar();

  }, ActiveEnemy.attackspeed);
}

//Set up our combat attack timers
function tankattackenemy(){
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  var tankexpprogressbar = document.getElementById("TankExpBarId");
  var healerexpprogressbar = document.getElementById("HealerExpBarId");
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
      setTimeout(SendOutMembers(), 600);
      clearInterval(window.tankattackinterval);
      clearInterval(window.healerhealinterval);
      clearInterval(window.dpsattackinterval);
      clearInterval(window.enemyattackinterval);
      var sharedExp = ActiveEnemy.expReward / membersActive.totalmembers;
      if(membersActive.tank == 1 && Tank.health > 0){
        Tank.exp += sharedExp;
      }
      if(membersActive.healer == 1 && Healer.health > 0){
        Healer.exp += sharedExp;
      }
      if(membersActive.dps == 1 && DPS.health > 0){
        DPS.exp += sharedExp;
      }
      checkForLevelUp();
      setExpBar();
      addLoot();

    }
  }, Tank.attackspeed);
}

function healerhealmember(){

  window.healerhealinterval = setInterval(() => {
    var needsHealed = Math.min(Tank.health, Healer.health, DPS.health);

  }, Healer.attackspeed);
}

function dpsattackenemy(){
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  var tankexpprogressbar = document.getElementById("TankExpBarId");
  var dpsexpprogressbar = document.getElementById("DPSExpBarId");
  var healerexpprogressbar = document.getElementById("HealerExpBarId");

  window.dpsattackinterval = setInterval(() => {
    if(ActiveEnemy.health > 0 && DPS.health > 0 ){
      ActiveEnemy.health -= DPS.damage;
    }

    enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
    enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
    enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);

    if(ActiveEnemy.health <= 0){
      document.getElementById("SelectZoneBeforeTextId").innerHTML = "loading...";
      setTimeout(SendOutMembers(), 600);
      clearInterval(window.tankattackinterval);
      clearInterval(window.healerhealinterval);
      clearInterval(window.dpsattackinterval);
      clearInterval(window.enemyattackinterval);
      var sharedExp = ActiveEnemy.expReward / membersActive.totalmembers;
      if(membersActive.tank == 1 && Tank.health > 0){
        Tank.exp += sharedExp;
      }
      if(membersActive.healer == 1 && Healer.health > 0){
        Healer.exp += sharedExp;
      }
      if(membersActive.dps == 1 && DPS.health > 0){
        DPS.exp += sharedExp;
      }
      checkForLevelUp();
      setExpBar();
      addLoot();
      SendOutMembers();

    }
  }, DPS.attackspeed);
}

//Function for selecting the elwynn forest zone button
function selectelwynnforestzone(){

  //1 means elwynn forest - refer to variables.js
  selectedzone = 1;
  stopCombat();

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

function selectwestfallzone(){

  //2 means west fall - refer to variables.js
  selectedzone = 2;
  stopCombat();
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

  clearInterval(window.tankattackinterval);
  clearInterval(window.healerhealinterval);
  clearInterval(window.dpsattackinterval);
  clearInterval(window.enemyattackinterval);
  inCombat = 1;
  document.querySelectorAll(".enemybattlevisibility").forEach(a=>a.style.visibility = "visible");
  ActiveEnemy.health = ActiveEnemy.maxhealth;
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  enemyhealthprogressbar.setAttribute("value", ActiveEnemy.health);
  enemyhealthprogressbar.setAttribute("max", ActiveEnemy.maxhealth);
  enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);
  enemyhealthprogressbar.setAttribute("data-label", ActiveEnemy.health + "/" + ActiveEnemy.maxhealth);

  updateMob();
  setHealthBar();


  if(membersActive.tank == 1){
    tankattackenemy();
  }
  if(membersActive.healer == 1){
    healerhealmember()
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



  if(membersActive.tank == 1){
    membersActive.tank = 0;
    memberSelected.tank = 0;
    membersActive.totalmembers -= 1;
    Tank.currentzone = 0
    //Remove them from the active member list if they are in combat
    memberList = memberList.filter(e => e !== 'tank');
  }
  if(membersActive.healer == 1){
    membersActive.healer = 0;
    memberSelected.healer = 0;
    membersActive.totalmembers -= 1;
    Healer.currentzone = 0
    //Remove them from the active member list if they are in combat
    memberList = memberList.filter(e => e !== 'tank');

  }
  if(membersActive.dps == 1){
    membersActive.dps = 0;
    memberSelected.dps = 0;
    membersActive.totalmembers -= 1;
    DPS.currentzone = 0
    //Remove them from the active member list if they are in combat
    memberList = memberList.filter(e => e !== 'tank');

  }

  clearInterval(window.tankattackinterval);
  clearInterval(window.healerhealinterval);
  clearInterval(window.dpsattackinterval);
  document.getElementById("player1_battle_info_div_id").style.visibility = "hidden";
  document.getElementById("player2_battle_info_div_id").style.visibility = "hidden";
  document.getElementById("player3_battle_info_div_id").style.visibility = "hidden";



  inCombat = 0;
}

function SendOutMembers(){
  sendOutMemberBoxVisibility = 0;

  document.getElementById("SelectPartyMemberContainerId").style.visibility = "hidden";
  document.getElementById("SelectTank").style.visibility = "hidden";
  document.getElementById("SelectHealer").style.visibility = "hidden";
  document.getElementById("SelectDPS").style.visibility = "hidden";
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");
  setHealthBar();
  setExpBar();


  if(memberSelected.tank >= 1){
    membersActive.tank = 1;
    membersActive.totalmembers += 1;
    document.getElementById("player1_battle_info_div_id").style.visibility = "visible";
    //1 means elwynn forest zone
    if(selectedzone == 1){
      Tank.currentzone = 1;
    }
    //2 means westfall
    if(selectedzone == 2){
      Tank.currentzone = 2;
    }
    //3 means wetlands
    if(selectedzone == 3){
      Tank.currentzone = 3;
    }
    //4 means badlands
    if(selectedzone == 4){
      Tank.currentzone = 4;
    }

  }

  if(memberSelected.healer >= 1){
    membersActive.healer = 1;
    membersActive.totalmembers += 1;
    document.getElementById("player2_battle_info_div_id").style.visibility = "visible";
    if(selectedzone == 1){
      Healer.currentzone = 1;
    }
    //2 means westfall
    if(selectedzone == 2){
      Healer.currentzone = 2;
    }
    //3 means wetlands
    if(selectedzone == 3){
      Healer.currentzone = 3;
    }
    //4 means badlands
    if(selectedzone == 4){
      Healer.currentzone = 4;
    }
  }

  if(memberSelected.dps >= 1){
    membersActive.dps = 1;
    membersActive.totalmembers += 1;
    document.getElementById("player3_battle_info_div_id").style.visibility = "visible";
    if(selectedzone == 1){
      DPS.currentzone = 1;
    }
    //2 means westfall
    if(selectedzone == 2){
      DPS.currentzone = 2;
    }
    //3 means wetlands
    if(selectedzone == 3){
      DPS.currentzone = 3;
    }
    //4 means badlands
    if(selectedzone == 4){
      DPS.currentzone = 4;
    }
  }

  if (membersActive.tank == 1 || membersActive.healer == 1 || membersActive.dps == 1){
    document.getElementById("SelectZoneBeforeTextId").innerHTML = "loading...";
    let combatLoaderTimer = setTimeout(startCombat, 600);
    setHealthBar();

  }


  if (membersActive.tank == 1){
    memberList.push("tank");
  }

  if (membersActive.healer == 1){
    memberList.push("healer");
  }

  if (membersActive.dps == 1){
    memberList.push("dps");
  }


}
