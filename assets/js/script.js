
// The variables.
tankhealth = 10,
healerhealth = 10,
dpshealth = 10,
tankdamage = 1,
healerhealing = 1,
dpsdamage = 0.5,
tankattackspeed = 2500,
healerattackspeed = 5000,
dpsattackspeed = 1500,
enemyhealthvalue = 20,
enemyhealthmaxvalue = 20,
enemydamage = 1,
enemyattackspeed = 3,
currentzone = 0,
refreshtankattackinterval = 0,
lootamount = 0

//Set all of the party members stats to there variables
function setpartymemberstats(){
  //Tank
  document.getElementById("Player1DamageInfoText").innerHTML = "Damage: " + tankdamage;
  //Healer
  document.getElementById("Player2HealingInfoText").innerHTML = "Damage: " + healerhealing;
  //DPS
  document.getElementById("Player3DamageInfoText").innerHTML = "Damage: " + dpsdamage;
}

var ElwynnForestEnemyArray = ['Kobold', 'Murloc', 'Wolf', 'Bear','Spider'];

function attackenemy(){
  var enemyhealthprogressbar = document.getElementById("EnemyHealthBarId");


  var tankattackinterval = setInterval(() => {
    if(enemyhealthvalue > 0){
      enemyhealthvalue -= tankdamage;
    }

    console.log(enemyhealthvalue);
    enemyhealthprogressbar.setAttribute("value",enemyhealthvalue);
    enemyhealthprogressbar.setAttribute("max",enemyhealthmaxvalue);
    enemyhealthprogressbar.setAttribute("data-label",enemyhealthvalue + "/" + enemyhealthmaxvalue);


    if(enemyhealthvalue <= 0){
      selectelwynnforestzone();
      clearInterval(tankattackinterval);
      clearInterval(dpsattackinterval);
      enemyhealthprogressbar.setAttribute("value",enemyhealthvalue);
      enemyhealthprogressbar.setAttribute("max",enemyhealthmaxvalue);
      enemyhealthprogressbar.setAttribute("data-label",enemyhealthvalue + "/" + enemyhealthmaxvalue);

      if(lootamount<10){
        lootamount += 1;
        document.getElementById("CollectLootText").innerHTML = "Loot (" + lootamount + "/" + "10" + ")"
      }

    }

  }, tankattackspeed);

  var dpsattackinterval = setInterval(() => {
  if(enemyhealthvalue > 0){
    enemyhealthvalue -= dpsdamage;
  }

  console.log(enemyhealthvalue);
  enemyhealthprogressbar.setAttribute("value",enemyhealthvalue);
  enemyhealthprogressbar.setAttribute("max",enemyhealthmaxvalue);
  enemyhealthprogressbar.setAttribute("data-label",enemyhealthvalue + "/" + enemyhealthmaxvalue);


  if(enemyhealthvalue <= 0){
    selectelwynnforestzone();
    clearInterval(tankattackinterval);
    clearInterval(dpsattackinterval);
    enemyhealthprogressbar.setAttribute("value",enemyhealthvalue);
    enemyhealthprogressbar.setAttribute("max",enemyhealthmaxvalue);
    enemyhealthprogressbar.setAttribute("data-label",enemyhealthvalue + "/" + enemyhealthmaxvalue);

    if(lootamount<10){
      lootamount += 1;
      document.getElementById("CollectLootText").innerHTML = "Loot (" + lootamount + "/" + "10" + ")"
    }
  }
}, dpsattackspeed);
}

function selectelwynnforestzone(){

  var currentzone = 1;

  const randomelwynnenemy = Math.floor(Math.random() * ElwynnForestEnemyArray.length);
  console.log(randomelwynnenemy, ElwynnForestEnemyArray[randomelwynnenemy]);
  document.getElementById("EnemyNameText").innerHTML = ElwynnForestEnemyArray[randomelwynnenemy];

  document.getElementById("battle_enemy_loader_container_id").style.display = "block";
  document.getElementById("SelectZoneBeforeTextId").style.display = "none";


//Kobold
  if(randomelwynnenemy == 0){
    enemyhealthvalue = 20;
    enemyhealthmaxvalue = 20;
  }
//Murloc
  if(randomelwynnenemy == 1){
    enemyhealthvalue = 20;
    enemyhealthmaxvalue = 20;
  }
//Wolf
  if(randomelwynnenemy == 2){
    enemyhealthvalue = 20;
    enemyhealthmaxvalue = 20;
  }
//Bear
  if(randomelwynnenemy == 3){
    enemyhealthvalue = 20;
    enemyhealthmaxvalue = 20;
  }
//Spider
  if(randomelwynnenemy == 4){
    enemyhealthvalue = 20;
    enemyhealthmaxvalue = 20;
  }

  setTimeout(() => {

    const enemybattleloadertimer = document.getElementById("battle_enemy_loader_id")

    enemybattleloadertimer.style.display = "none";

    document.getElementById("enemy_stats_text_id").style.display = "block";
    document.getElementById("EnemyNameText").style.display = "block";
    document.getElementById("EnemyHealthBarId").style.display = "block";
    document.getElementById("CollectLootText").style.display = "block";
    document.getElementById("CollectLootButton").style.display = "block";

  }, 700);

  attackenemy();

}
