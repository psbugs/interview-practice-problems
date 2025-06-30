
const users = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28
  },
   {
    firstName: "Bitch",
    lastName: "Boss",
    age: 28
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    age: 35
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    age: 22
  },
  {
    firstName: "Diana",
    lastName: "Miller",
    age: 28
  }
];

function groupBy(users,groupBy){
    const groupedUsers=users.reduce((acc,obj)=>{
        if(!acc[obj[groupBy]]){
            acc[obj[groupBy]] = [];
        }
        acc[obj[groupBy]].push(obj);
        return acc
    },{});
    console.log('groupedUsers',groupedUsers)
};

console.log('groupBy challenge',groupBy(users,'age'))