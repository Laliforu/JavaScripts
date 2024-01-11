const a = ['bhavnesh',"jacks","abc","jk"]
const b = ["b","a","k","l"]

// a.push(b) changes in existing array
var k = a.concat(b) // concat returns 
// console.log(k);

const all = [...a,...b,...k]
// console.log(all);
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let myarr =  another_arr.flat(Infinity) // depth count
console.log(myarr);


console.log(Array.isArray("bhavnesh"));
console.log(Array.from("bhavnesh"));
console.log(Array.from({name:"bhavnesh"})); // interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

let ki = [0,1,2,3,4,5,6]
let po = ki.splice(0,2,8,45,85)
ki.shift()
console.log(ki);
console.log(po);