export type Rarity = "Legendary" | "Epic" | "Rare" | "Common";
export type Demand = "Very High" | "High" | "Medium" | "Low";
export type Trend  = "up" | "down" | "stable";
export type FruitType = "Logia" | "Paramecia" | "Zoan";

export interface Fruit {
  id: number;
  name: string;
  type: FruitType;
  rarity: Rarity;
  value: number;
  permValue: number;
  demand: Demand;
  trend: Trend;
  pvp: string;
  awakened: boolean;
  img: string;
}

export interface Gamepass {
  id: number;
  name: string;
  value: number;
  demand: Demand;
  trend: Trend;
  img: string;
  desc: string;
}

export interface Limited {
  id: number;
  name: string;
  value: number;
  demand: Demand;
  trend: Trend;
  img: string;
  seasonal: boolean;
}

export interface TradeAd {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  verified: boolean;
  bumped: boolean;
  offering: string[];
  requesting: string[];
  notes: string;
  timeAgo: string;
  online: boolean;
}

export const FRUITS: Fruit[] = [
  { id:1,  name:"Dragon",    type:"Zoan",      rarity:"Legendary", value:3500000, permValue:7800000, demand:"Very High", trend:"up",     pvp:"S",  awakened:true,  img:"🐉" },
  { id:2,  name:"Leopard",   type:"Zoan",      rarity:"Legendary", value:5000000, permValue:9500000, demand:"Very High", trend:"up",     pvp:"S+", awakened:true,  img:"🐆" },
  { id:3,  name:"Kitsune",   type:"Zoan",      rarity:"Legendary", value:4200000, permValue:8700000, demand:"High",      trend:"up",     pvp:"S",  awakened:true,  img:"🦊" },
  { id:4,  name:"Dough",     type:"Paramecia", rarity:"Legendary", value:2800000, permValue:6200000, demand:"Very High", trend:"stable", pvp:"S",  awakened:true,  img:"🍞" },
  { id:5,  name:"Shadow",    type:"Paramecia", rarity:"Legendary", value:2900000, permValue:6400000, demand:"High",      trend:"up",     pvp:"A+", awakened:true,  img:"🌑" },
  { id:6,  name:"Venom",     type:"Paramecia", rarity:"Legendary", value:2700000, permValue:5800000, demand:"High",      trend:"stable", pvp:"A",  awakened:true,  img:"☠️" },
  { id:7,  name:"Spirit",    type:"Paramecia", rarity:"Legendary", value:3800000, permValue:7200000, demand:"High",      trend:"up",     pvp:"S",  awakened:true,  img:"👻" },
  { id:8,  name:"Control",   type:"Paramecia", rarity:"Legendary", value:2500000, permValue:5200000, demand:"Medium",    trend:"down",   pvp:"A",  awakened:true,  img:"🌀" },
  { id:9,  name:"Rumble",    type:"Logia",     rarity:"Legendary", value:2100000, permValue:4800000, demand:"High",      trend:"up",     pvp:"A+", awakened:true,  img:"⚡" },
  { id:10, name:"Phoenix",   type:"Zoan",      rarity:"Legendary", value:1700000, permValue:3900000, demand:"High",      trend:"stable", pvp:"A",  awakened:true,  img:"🦅" },
  { id:11, name:"Gravity",   type:"Paramecia", rarity:"Epic",      value:2300000, permValue:4200000, demand:"Medium",    trend:"down",   pvp:"A",  awakened:true,  img:"🪐" },
  { id:12, name:"Portal",    type:"Paramecia", rarity:"Epic",      value:2100000, permValue:4500000, demand:"Medium",    trend:"stable", pvp:"B+", awakened:true,  img:"🌐" },
  { id:13, name:"Sound",     type:"Paramecia", rarity:"Epic",      value:1800000, permValue:3600000, demand:"Medium",    trend:"up",     pvp:"A",  awakened:true,  img:"🎵" },
  { id:14, name:"Light",     type:"Logia",     rarity:"Epic",      value:1500000, permValue:3200000, demand:"High",      trend:"stable", pvp:"A",  awakened:true,  img:"💡" },
  { id:15, name:"Blizzard",  type:"Logia",     rarity:"Epic",      value:1400000, permValue:2900000, demand:"Medium",    trend:"stable", pvp:"B+", awakened:true,  img:"❄️" },
  { id:16, name:"Mammoth",   type:"Zoan",      rarity:"Epic",      value:2000000, permValue:3800000, demand:"Medium",    trend:"stable", pvp:"B+", awakened:true,  img:"🦣" },
  { id:17, name:"T-Rex",     type:"Zoan",      rarity:"Rare",      value:1800000, permValue:3200000, demand:"Medium",    trend:"stable", pvp:"B",  awakened:true,  img:"🦖" },
  { id:18, name:"Magma",     type:"Logia",     rarity:"Rare",      value:900000,  permValue:1800000, demand:"High",      trend:"up",     pvp:"A",  awakened:true,  img:"🌋" },
  { id:19, name:"Quake",     type:"Paramecia", rarity:"Rare",      value:1000000, permValue:2100000, demand:"Medium",    trend:"stable", pvp:"B+", awakened:true,  img:"💥" },
  { id:20, name:"Dark",      type:"Logia",     rarity:"Rare",      value:500000,  permValue:1100000, demand:"Medium",    trend:"stable", pvp:"B",  awakened:true,  img:"🌚" },
  { id:21, name:"Ice",       type:"Logia",     rarity:"Rare",      value:350000,  permValue:780000,  demand:"Medium",    trend:"stable", pvp:"B",  awakened:true,  img:"🧊" },
  { id:22, name:"Rubber",    type:"Paramecia", rarity:"Rare",      value:750000,  permValue:1500000, demand:"Low",       trend:"down",   pvp:"B",  awakened:true,  img:"🎈" },
  { id:23, name:"Sand",      type:"Logia",     rarity:"Rare",      value:420000,  permValue:900000,  demand:"Medium",    trend:"up",     pvp:"B",  awakened:true,  img:"🏜️" },
  { id:24, name:"Flame",     type:"Logia",     rarity:"Common",    value:250000,  permValue:550000,  demand:"Low",       trend:"stable", pvp:"C",  awakened:true,  img:"🔥" },
  { id:25, name:"Smoke",     type:"Logia",     rarity:"Common",    value:100000,  permValue:220000,  demand:"Low",       trend:"down",   pvp:"D",  awakened:true,  img:"💨" },
  { id:26, name:"Barrier",   type:"Paramecia", rarity:"Common",    value:80000,   permValue:180000,  demand:"Low",       trend:"stable", pvp:"C",  awakened:false, img:"🛡️" },
  { id:27, name:"Spring",    type:"Paramecia", rarity:"Common",    value:60000,   permValue:130000,  demand:"Low",       trend:"stable", pvp:"D",  awakened:false, img:"🌀" },
  { id:28, name:"Chop",      type:"Paramecia", rarity:"Common",    value:30000,   permValue:70000,   demand:"Low",       trend:"stable", pvp:"D",  awakened:false, img:"🪓" },
  { id:29, name:"Bomb",      type:"Paramecia", rarity:"Common",    value:25000,   permValue:55000,   demand:"Low",       trend:"down",   pvp:"D",  awakened:false, img:"💣" },
  { id:30, name:"Spike",     type:"Paramecia", rarity:"Common",    value:75000,   permValue:160000,  demand:"Low",       trend:"stable", pvp:"D",  awakened:false, img:"📌" },
];

export const GAMEPASSES: Gamepass[] = [
  { id:101, name:"Fruit Notifier",    value:2700000, demand:"Very High", trend:"up",     img:"🔔", desc:"Get notified when fruits spawn on the map" },
  { id:102, name:"2x Mastery",        value:200000,  demand:"High",      trend:"stable", img:"⚡", desc:"Double your mastery experience gain" },
  { id:103, name:"Premium Ship",      value:400000,  demand:"High",      trend:"stable", img:"⛵", desc:"Premium ship with extra features" },
  { id:104, name:"Faster Boats",      value:150000,  demand:"Medium",    trend:"stable", img:"🚤", desc:"Increase boat speed significantly" },
  { id:105, name:"2x Money",          value:180000,  demand:"High",      trend:"up",     img:"💰", desc:"Double your Beli earnings" },
  { id:106, name:"Haki Particles",    value:250000,  demand:"High",      trend:"stable", img:"✨", desc:"Special visual Haki particle effects" },
  { id:107, name:"Buddy System",      value:95000,   demand:"Medium",    trend:"stable", img:"👥", desc:"Share XP with your buddy" },
  { id:108, name:"Physical Robux",    value:120000,  demand:"Low",       trend:"down",   img:"💎", desc:"Physical Robux gamepass" },
  { id:109, name:"Mast",              value:80000,   demand:"Low",       trend:"stable", img:"⚓", desc:"Add a mast to your boat" },
];

export const LIMITEDS: Limited[] = [
  { id:201, name:"Cursed Dual Katana", value:15000000, demand:"Very High", trend:"up",     img:"⚔️",  seasonal:false },
  { id:202, name:"Canvander",          value:8000000,  demand:"Very High", trend:"up",     img:"🗡️",  seasonal:false },
  { id:203, name:"Leviathan Heart",    value:12000000, demand:"Very High", trend:"up",     img:"💙",  seasonal:true  },
  { id:204, name:"Godhuman",           value:5500000,  demand:"Very High", trend:"up",     img:"🙏",  seasonal:false },
  { id:205, name:"Dragon Talon",       value:4500000,  demand:"Very High", trend:"up",     img:"🐉",  seasonal:false },
  { id:206, name:"Sanguine Art",       value:4000000,  demand:"High",      trend:"up",     img:"🩸",  seasonal:false },
  { id:207, name:"Santa's Gift",       value:11000000, demand:"High",      trend:"stable", img:"🎁",  seasonal:true  },
  { id:208, name:"Shark Saw",          value:6500000,  demand:"High",      trend:"stable", img:"🦈",  seasonal:false },
  { id:209, name:"Winter Warrior",     value:9000000,  demand:"Medium",    trend:"down",   img:"❄️",  seasonal:true  },
  { id:210, name:"Soul Guitar",        value:5800000,  demand:"High",      trend:"up",     img:"🎸",  seasonal:false },
  { id:211, name:"Electric Claw",      value:3000000,  demand:"High",      trend:"stable", img:"⚡",  seasonal:false },
  { id:212, name:"Death Step",         value:2800000,  demand:"High",      trend:"up",     img:"💀",  seasonal:false },
  { id:213, name:"Dark Dagger",        value:3200000,  demand:"High",      trend:"stable", img:"🔪",  seasonal:false },
  { id:214, name:"Easter Shield",      value:7200000,  demand:"Medium",    trend:"down",   img:"🥚",  seasonal:true  },
];

export const TRADE_ADS: TradeAd[] = [
  { id:1,  user:"FruitMaster99",  avatar:"🐉", rating:98, verified:true,  bumped:false, online:true,  offering:["Dragon","Dough"],            requesting:["Leopard"],              notes:"",                        timeAgo:"2m"  },
  { id:2,  user:"LeoFarmer",      avatar:"🐆", rating:95, verified:true,  bumped:true,  online:true,  offering:["Leopard"],                   requesting:["Kitsune","2x Mastery"],  notes:"Quick trade only",        timeAgo:"5m"  },
  { id:3,  user:"ShadowKing",     avatar:"🌑", rating:87, verified:false, bumped:false, online:true,  offering:["Shadow","Fruit Notifier"],   requesting:["Spirit"],               notes:"",                        timeAgo:"12m" },
  { id:4,  user:"VenomPlayer",    avatar:"☠️", rating:92, verified:true,  bumped:false, online:false, offering:["Venom","Control"],           requesting:["Dragon"],               notes:"Can add extra",           timeAgo:"18m" },
  { id:5,  user:"RumbleGod",      avatar:"⚡", rating:78, verified:false, bumped:true,  online:true,  offering:["Rumble","Light"],            requesting:["Dough"],                notes:"",                        timeAgo:"25m" },
  { id:6,  user:"KitsuneHunter",  avatar:"🦊", rating:96, verified:true,  bumped:false, online:true,  offering:["Kitsune"],                  requesting:["Leopard","Fruit Notifier"],notes:"Trusted trader",        timeAgo:"33m" },
  { id:7,  user:"PhoenixRise",    avatar:"🦅", rating:83, verified:false, bumped:false, online:false, offering:["Phoenix","Sound","Paw"],    requesting:["Shadow"],               notes:"",                        timeAgo:"41m" },
  { id:8,  user:"MagmaLord",      avatar:"🌋", rating:91, verified:true,  bumped:false, online:true,  offering:["Magma","Magma","Light"],    requesting:["Rumble"],               notes:"No scammers pls",         timeAgo:"1h"  },
  { id:9,  user:"GravityPull",    avatar:"🪐", rating:72, verified:false, bumped:true,  online:true,  offering:["Gravity","Gravity"],        requesting:["Dragon"],               notes:"",                        timeAgo:"1h"  },
  { id:10, user:"IceQueen",       avatar:"🧊", rating:99, verified:true,  bumped:false, online:false, offering:["Cursed Dual Katana"],       requesting:["Canvander","Godhuman"], notes:"Fair trades only",        timeAgo:"2h"  },
];

export const fmt = (n: number): string => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
};

export const RARITY_STYLES: Record<string, { border: string; badge: string; glow: string; text: string }> = {
  Legendary: { border:"border-yellow-500/40", badge:"bg-yellow-500/15 text-yellow-400 border-yellow-500/30", glow:"shadow-yellow-500/20", text:"text-yellow-400" },
  Epic:      { border:"border-purple-500/40", badge:"bg-purple-500/15 text-purple-400 border-purple-500/30", glow:"shadow-purple-500/20", text:"text-purple-400" },
  Rare:      { border:"border-blue-500/40",   badge:"bg-blue-500/15 text-blue-400 border-blue-500/30",       glow:"shadow-blue-500/20",   text:"text-blue-400"   },
  Common:    { border:"border-slate-600/40",  badge:"bg-slate-600/15 text-slate-400 border-slate-600/30",    glow:"shadow-slate-500/20",  text:"text-slate-400"  },
};

export const DEMAND_STYLES: Record<string, string> = {
  "Very High": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "High":      "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Medium":    "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  "Low":       "bg-red-500/15 text-red-400 border-red-500/30",
};

export const TYPE_STYLES: Record<string, string> = {
  Logia:     "bg-sky-500/15 text-sky-300",
  Paramecia: "bg-violet-500/15 text-violet-300",
  Zoan:      "bg-amber-500/15 text-amber-300",
};
