const users = [
  { id: 1, email: "a@example.com" },
  { id: 2, email: "b@example.com" },
  { id: 3, email: "a@example.com" }
];

let usersCountObj = {};
for(let item of users){
    let {email} = item;
    usersCountObj[email] = (usersCountObj[email] || 0) +1;
};

const filteredUsers = users.filter((user)=> usersCountObj[user.email] > 1);

console.log("filteredUsers",filteredUsers)