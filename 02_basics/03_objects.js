//  singleton ( apni trh ka unique object ) literal se bnega to singleton nhi bnega
// Object.create 



// object literals

const mys1 = Symbol("key1")
let obj = {
    name:"bhavnesh",
    [mys1]:"logged",
    age:23,
    location : 'Delhi',
    email:'bsmehra@gmail.com',
    isloggedin : false,
    lastloggedindays: ["monday","wednesday"],
    "fullname":"bhavnesh mehra",
}
obj["fullname"] = "abc"
// Object.freeze(obj)
obj["fullname"] = "poikk"

obj.greeting = function(){
    return `hello ${this.name}`;
}
console.log(obj.greeting());
// console.log(obj['fullname']);
console.log(obj[mys1]);
// console.log(obj);

console.log();


