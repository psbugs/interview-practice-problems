// const 
// those customer who never purchased any products

// customer 
// id name gender

// products
// cid  amount price productName

db.products.aggregate([
    $match: { cid: null },
    {
        $lookup: {
            localField: 'cid',
            foreignField: '_id',
            from: 'customer',
            as: 'productInfo'
        },{
        $project: {
            productName: 1,
            "productInfo.name": 1
        }
    }
]);

// 0,1,1,2,3,5,8,13
let a = 0;
let b = 1;

const arr = [a, b];

let limit = 8;
for (let i = 2; i < limit; i++) {
    let temp = a + b;
    a = temp;
    b = a;
    arr.push(temp);
}

console.log(arr);