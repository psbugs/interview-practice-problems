const spookyItems = [1, 2, 3, 4];
spookyItems[4] = 6;
({ item: spookyItems[4] } = { item: 5 })
console.log(spookyItems)