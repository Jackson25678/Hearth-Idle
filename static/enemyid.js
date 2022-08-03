var ElwynnForestEnemies = [
  'Kobold',
  'Murloc',
  'Wolf',
  'Bear',
  'Spider',
  //Add deer
];

var WestFallEnemies = [
  'Ghoul',
  'Cow',
  'Coyote',
  'Slark',
  'Dust Devil',

];

var WetLandsEnemies = [
  'Cave Stalker',
  'Fen Dweller',
  'Gnawbone',
  'Cursed Marine',
  'Fen Lord',

];


var randomelwynnenemy = Math.floor(Math.random() * ElwynnForestEnemies.length);
var randomwestfallenemy = Math.floor(Math.random() * WestFallEnemies.length);
var randomwetlandsenemy = Math.floor(Math.random() * WetLandsEnemies.length);

var randomelwynnenemydrop = 0;

//Humanoids
var Kobold = {
  level: 1,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 1,
  loot: ['linencloth', 'a', 'a', 'a'],
  attackspeed:1000
}

var Murloc = {
  level: 1,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 2,
  loot: ['linencloth', 'a', 'a', 'a'],
  attackspeed:1000
}

//Animal
var Spider = {
  level: 1,
  expReward: 5,
  health: 20,
  maxhealth: 20,
  damage: 1,
  loot: ['a', 'a', '', 'a'],
  attackspeed:1000
}
var Bear = {
  level: 2,
  expReward: 5,
  health: 35,
  maxhealth: 35,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var Wolf = {
  level: 1,
  expReward: 5,
  health: 25,
  maxhealth: 25,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}


var Ghoul = {
  level: 6,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var Cow = {
  level: 5,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 2,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}


var Coyote = {
  level: 7,
  expReward: 5,
  health: 20,
  maxhealth: 20,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var Slark = {
  level: 6,
  expReward: 5,
  health: 35,
  maxhealth: 35,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var DustDevil = {
  level: 8,
  expReward: 5,
  health: 25,
  maxhealth: 25,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}
var CaveStalker= {
  level: 6,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var FenDweller = {
  level: 5,
  expReward: 5,
  health: 15,
  maxhealth: 15,
  damage: 2,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}


var GnawBone = {
  level: 7,
  expReward: 5,
  health: 20,
  maxhealth: 20,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}
var CursedMarine = {
  level: 6,
  expReward: 5,
  health: 35,
  maxhealth: 35,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}

var FenLord = {
  level: 8,
  expReward: 5,
  health: 25,
  maxhealth: 25,
  damage: 1,
  loot: ['a', 'a', 'a', 'a'],
  attackspeed:1000
}
