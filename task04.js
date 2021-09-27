function getMaleCats(list) {
  return list.filter((x) => x.gender === "кот");
}

function getCatsNames(list) {
  return list.map((x) => x.name);
}

function getOldestMaleCatsNames(list, n = Number.MAX_SAFE_INTEGER) {
  if (n <= 0) return [];
  const maleCats = getMaleCats(list);
  const descendingSortedMaleCats = maleCats.sort((a, b) => b.age - a.age);
  const topSlice = descendingSortedMaleCats.slice(
    0,
    Math.min(list.length, n - 1)
  );
  return getCatsNames(topSlice);
}

module.exports = { getMaleCats, getCatsNames, getOldestMaleCatsNames };
