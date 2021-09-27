function getMaleCats(list) {
    return list.filter(x => x.gender === 'кот');
}

module.exports = getMaleCats
