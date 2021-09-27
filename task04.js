function getMaleCats(list) {
    return list.filter(x => x.gender === 'кот');
}

function getCatsNames(list) {
    return list.map(x => x.name);
}

module.exports = {getMaleCats, getCatsNames}
