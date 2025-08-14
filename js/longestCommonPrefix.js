function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    strs.sort();
    console.log('sorted strs', strs)
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
}


console.log(longestCommonPrefix(["flower", "flow", "flag"]));