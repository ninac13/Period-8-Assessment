const pokemons = [
  {
    id: 177,
    name: {
      english: "Natu",
      japanese: "ネイティ",
      chinese: "天然雀",
      french: "Natu",
    },
    type: ["Psychic", "Flying"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      Speed: 70,
    },
  },
  {
    id: 178,
    name: {
      english: "Xatu",
      japanese: "ネイティオ",
      chinese: "天然鸟",
      french: "Xatu",
    },
    type: ["Psychic", "Flying"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 70,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 95,
    },
  },
  {
    id: 179,
    name: {
      english: "Mareep",
      japanese: "メリープ",
      chinese: "咩利羊",
      french: "Wattouat",
    },
    type: ["Electric"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 35,
    },
  },
  {
    id: 180,
    name: {
      english: "Flaaffy",
      japanese: "モココ",
      chinese: "茸茸羊",
      french: "Lainergie",
    },
    type: ["Electric"],
    base: {
      HP: 70,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 80,
      "Sp. Defense": 60,
      Speed: 45,
    },
  },
  {
    id: 181,
    name: {
      english: "Ampharos",
      japanese: "デンリュウ",
      chinese: "电龙",
      french: "Pharamp",
    },
    type: ["Electric"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 115,
      "Sp. Defense": 90,
      Speed: 55,
    },
  },
  {
    id: 182,
    name: {
      english: "Bellossom",
      japanese: "キレイハナ",
      chinese: "美丽花",
      french: "Joliflor",
    },
    type: ["Grass"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 50,
    },
  },
  {
    id: 183,
    name: {
      english: "Marill",
      japanese: "マリル",
      chinese: "玛力露",
      french: "Marill",
    },
    type: ["Water", "Fairy"],
    base: {
      HP: 70,
      Attack: 20,
      Defense: 50,
      "Sp. Attack": 20,
      "Sp. Defense": 50,
      Speed: 40,
    },
  },
  {
    id: 184,
    name: {
      english: "Azumarill",
      japanese: "マリルリ",
      chinese: "玛力露丽",
      french: "Azumarill",
    },
    type: ["Water", "Fairy"],
    base: {
      HP: 100,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 50,
    },
  },
  {
    id: 185,
    name: {
      english: "Sudowoodo",
      japanese: "ウソッキー",
      chinese: "树才怪‎",
      french: "Simularbre",
    },
    type: ["Rock"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 30,
      "Sp. Defense": 65,
      Speed: 30,
    },
  },
  {
    id: 186,
    name: {
      english: "Politoed",
      japanese: "ニョロトノ",
      chinese: "蚊香蛙皇",
      french: "Tarpaud",
    },
    type: ["Water"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 70,
    },
  },
  {
    id: 187,
    name: {
      english: "Hoppip",
      japanese: "ハネッコ",
      chinese: "毽子草",
      french: "Granivol",
    },
    type: ["Grass", "Flying"],
    base: {
      HP: 35,
      Attack: 35,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 55,
      Speed: 50,
    },
  },
  {
    id: 188,
    name: {
      english: "Skiploom",
      japanese: "ポポッコ",
      chinese: "毽子花",
      french: "Floravol",
    },
    type: ["Grass", "Flying"],
    base: {
      HP: 55,
      Attack: 45,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 80,
    },
  },
  {
    id: 189,
    name: {
      english: "Jumpluff",
      japanese: "ワタッコ",
      chinese: "毽子棉",
      french: "Cotovol",
    },
    type: ["Grass", "Flying"],
    base: {
      HP: 75,
      Attack: 55,
      Defense: 70,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      Speed: 110,
    },
  },
  {
    id: 190,
    name: {
      english: "Aipom",
      japanese: "エイパム",
      chinese: "长尾怪手",
      french: "Capumain",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 85,
    },
  },
];

// 1)While chaining array methods, print the name of each pokemon with a base HP stat 75 or higher

// 2) While Chaining Array methods print the name of each pokemon who's type includes Grass
function getGrass(array){
  const newArrayGrass = array.filter((pokemon)=>pokemon.type.includes("Grass"));
  newArrayGrass.forEach((pokemon) => {
      console.log(pokemon.name);
  });
}

getGrass(pokemons);

function getHP(array){
  const newArrayHP = array.filter((pokemon)=>pokemon.base.HP > (75));
  newArrayHP.forEach((pokemon) => {
      console.log(pokemon.name);
  });
}

getHP(pokemons);