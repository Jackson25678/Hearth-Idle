var Tank = {
  currentzone: 0,
  level: 1,
  damage: 6,
  attackspeed: 3000,
  health: 25,
  maxhealth: 25,
  regen: 1,
  reduction: 1,
  exp: 0,
  expToLevel: 100,
  incombat: 0,
}
var Healer = {
  currentzone: 0,
  level: 1,
  healing: 0.5,
  attackspeed: 2500,
  health: 25,
  maxhealth: 25,
  regen: 1,
  reduction: 1,
  exp: 0,
  expToLevel: 100,
}
var DPS = {
  currentzone: 0,
  level: 1,
  damage: 3,
  attackspeed: 1500,
  health: 25,
  maxhealth: 25,
  regen: 1,
  reduction: 1,
  exp: 0,
  expToLevel: 100,
}

var ActiveEnemy = {
  level: 1,
  expReward: 1,
  health: 1,
  maxhealth: 1,
  damage: 1,
  loot: 1,
  attackspeed: 1000
}
var memberSelected = {
  tank: 0,
  healer: 0,
  dps: 0
}
var membersActive = {
  //0=nothing 1=combat 2=(some type of skill)
  totalmembers: 0,
  tank: 0,
  healer: 0,
  dps: 0,
  inCombat: 0
}

var MemberList = [
  'Tank',
  'Healer',
  'DPS',
];


var inCombat = 0;

var sendOutMemberBoxVisibility = 0;
//if (expToLevel)
