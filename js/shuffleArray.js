function shuffle(array) {
    const copy = [...array]
    const { length } = array;
    for (let i = 0; i < length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

// You need to create a shallow copy for this
// Dont mutate the original array