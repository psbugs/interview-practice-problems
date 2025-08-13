const fullName = "Praveen Sunhare";

const arr = fullName.split(' ');

const { length } = arr;
const temp = []
for (let i = 0; i < length; i++) {
    let item = arr[i];
    let itemLength = item.length;
    let reversed = ''
    for (let j = itemLength - 1; j >= 0; j--) {
        if (j % 2 == 0) {
            reversed = reversed + item[j]
        }
    }
    temp.push(reversed)
}
console.log('final output', temp.join(' '))

// employees table 1 
// mainemployee
// id , dateOfJoining , 

const date = new Date();

const month = date.getMonth();

db.secondEmp.aggregate([
    { $match: { yoe: 5 } }
    , {
        $lookup: {
            from: 'firstEmp',
            foreign_field: '',
            local_field: '_id',
            as: userInfo
        }
    },

])
// 27/November/2021
// 

// employee table2

// 
empId
// year of experience  5


