function getMaleCats(list) {
  return list.filter((x) => x.gender === "кот");
}

function getFemaleCats(list) {
  return list.filter((x) => x.gender === "кошка");
}

function getCatsNames(list) {
  return list.map((x) => x.name);
}

function getOldestMaleCatsNames(list, n = Number.MAX_SAFE_INTEGER) {
  if (n <= 0) return [];
  const maleCats = getMaleCats(list);
  const descendingSortedMaleCats = maleCats.sort((a, b) => b.age - a.age);
  const topSlice = descendingSortedMaleCats.slice(0, Math.min(list.length, n));
  return getCatsNames(topSlice);
}

function getYoungestFemaleCatsNames(list, n = Number.MAX_SAFE_INTEGER) {
  if (n <= 0) return [];
  const femaleCats = getFemaleCats(list);
  const sortedFemaleCats = femaleCats.sort((a, b) => a.age - b.age);
  const topSlice = sortedFemaleCats.slice(0, Math.min(list.length, n));
  return getCatsNames(topSlice);
}

module.exports = {
  getMaleCats,
  getCatsNames,
  getOldestMaleCatsNames,
  getYoungestFemaleCatsNames,
};
