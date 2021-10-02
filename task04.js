const list = catsGroupGenerate(999);

function getMaleCats(list) {
    list.filter(x => x.gender === 'кот');
}
