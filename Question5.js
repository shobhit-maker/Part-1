// Building array of objects
var obj = [
    {"id" : 4, "name" : "abc"},
    {"id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "abc3"},
    {"id" : 6, "name" : "abc5"}
];
// Using sort function sort this array and using id as comparable key.
obj.sort((a, b) => (a.id > b.id) ? 1 : -1);

console.log(obj);