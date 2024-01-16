const myApp = new Object()
myApp.id = "a2334"
myApp.name = "bhavnesh"
myApp.isloggedin = false

// console.log(myApp);
const regular = {
    name : "abc",
    email : "bhdv@gmail.com",
    fullname : {
        age:23,
        userfullname : {
            k : "bhavnesh",
            name: "mehra",
        }
    }
}
// console.log(regular.fullname.userfullname.name);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj1);