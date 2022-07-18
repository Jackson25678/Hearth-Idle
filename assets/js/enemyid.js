var ElwynnForestEnemies = [
  'Kobold',
  'Murloc',
  'Wolf',
  'Bear',
  'Spider'
];


var randomelwynnenemy = Math.floor(Math.random() * ElwynnForestEnemies.length);

var Kobold = {
  level: 1,
  expReward: 1,
  health: 15,
  maxhealth: 15,
  damage: 3,
  loot: 1,
  attackspeed:1000
}
var Spider = {
  level: 1,
  expReward: 2,
  health: 20,
  maxhealth: 20,
  damage: 1,
  loot: 1,
  attackspeed:1000
}
var Bear = {
  level: 2,
  expReward: 4,
  health: 35,
  maxhealth: 35,
  damage: 4,
  loot: 1,
  attackspeed:1000
}
var Murloc = {
  level: 1,
  expReward: 2,
  health: 15,
  maxhealth: 15,
  damage: 2,
  loot: 1,
  attackspeed:1000
}
var Wolf = {
  level: 1,
  expReward: 2,
  health: 25,
  maxhealth: 25,
  damage: 4,
  loot: 1,
  attackspeed:1000
}
