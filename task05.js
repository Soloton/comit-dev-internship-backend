function nameStats(list) {
  return list.reduce((sum, currentItem) => {
    sum[currentItem.name] = (sum[currentItem.name] || 0) + 1;
    return sum;
  }, {});
}

module.exports = nameStats;
