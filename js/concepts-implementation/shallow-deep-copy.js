const user = { name: 'praveen', address: { city: 'Indore', pinCode: '452010' } }
const copiedUser = { ...user };

copiedUser.name = 'fake praveen';
copiedUser.address.city = 'fake indore';

const deepCopiedUser = structuredClone(user);

deepCopiedUser.address.city = 'deep copied indore';

console.log('deepCopied', deepCopiedUser)
console.log('user', user);