async function fetchUsers(params) {
    const {id} = params;
    return await [{id:1,name:'test'},{id:2,name:'test1'},{id:3,name:'test2'}]
}
let response = fetchUsers({id:78}).then(data=> {
console.log('data',data);
}).catch(err=> {
console.log('err',err);
});

// Object.entries() and Object.values()
// Object.getOwnPropertyDescriptors