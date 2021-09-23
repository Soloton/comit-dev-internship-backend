let pick = function (list) {
    const randomListIndex = Math.floor(Math.random() * list.length);
    return list[randomListIndex];
}

module.exports = pick;
