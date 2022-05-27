type pokemon = {
    name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Criaria um script para rodar os comandos tsc index.ts e node build/index.js

// c) Não seria diferente, mas nao posso esquecer de colocar no arquivo tsconfig.json o  "outDir": "./build" e o "rootDir": "./src",

// d) Usar somente tsc compila todos os arquivos ts