function countSeeds(cellAmount) {
  return Math.pow(2, cellAmount) - 1;
}

console.log(countSeeds(64));