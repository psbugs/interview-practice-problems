function getPermutations(str) {
  if (str.length === 1) return [str]; // base case

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    console.log('currentChar',currentChar)
    const remaining = str.slice(0, i) + str.slice(i + 1);
    console.log('remaining',remaining)
    const perms = getPermutations(remaining); // recurse
    console.log('perms',perms)
    for (let perm of perms) {
      result.push(currentChar + perm);
    }
  }

  return result;
}

console.log(getPermutations('abc'))