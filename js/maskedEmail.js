const users = [
  { id: 1, name: "Alice", email: "alice@example.com", active: true },
  { id: 2, name: "Bob", email: "bob@example.com", active: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", active: true }
];

const filteredActiveUsers = users.filter((user) => user.active)
console.log('filteredActiveUsers', filteredActiveUsers);

const mapped = filteredActiveUsers.map((user, uIndex) => {
  let { email } = user;
  let [local, domain] = email.split('@');
  let firstItem = local[0] + "*".repeat(local.length - 1);
  return {
    ...user,
    email: firstItem + domain,

  }
});

console.log('mapped', mapped)