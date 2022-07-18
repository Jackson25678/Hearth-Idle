var ElwynnForestEnemies = [
  'Kobold',
  'Murloc',
  'Wolf',
  'Bear',
  'Spider'
];


var randomelwynnenemy = Math.floor(Math.random() * ElwynnForestEnemies.length);

//Humanoids
var Kobold = {
  level: 1,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 1,
  loot: ['linencloth', '', '', ''],
  attackspeed:1000
}

var Murloc = {
  level: 1,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 2,
  loot: ['linencloth', '', '', ''],
  attackspeed:1000
}

//Animal
var Spider = {
  level: 1,
  expReward: 5,
  health: 20,
  maxhealth: 20,
  damage: 1,
  loot: ['', '', '', ''],
  attackspeed:1000
}
var Bear = {
  level: 2,
  expReward: 5,
  health: 35,
  maxhealth: 35,
  damage: 4,
  loot: ['', '', '', ''],
  attackspeed:1000
}

var Wolf = {
  level: 1,
  expReward: 5,
  health: 25,
  maxhealth: 25,
  damage: 4,
  loot: ['', '', '', ''],
  attackspeed:1000
}
