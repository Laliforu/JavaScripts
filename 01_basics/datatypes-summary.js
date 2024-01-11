// Primitive
// call by value  (copy of value)
// 7 category : String, Number , Boolean, Null= empty , undefined= declare but not assigned, Symbol = unique value, BigInt
/*
* Premitive Datatypes

    Type               typeof

i)   Number            number
ii)  String            string
iii) Boolean           boolean
iv)  Bigint             bigint
v)   Symbol             symbol
vi)  Null               object
vii) Undefined          undefined
 */

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bignumber = BigInt(253654455666)
// console.log(bignumber);






// Non-Primitive
// call by reference
// Array, Objects, Functions
/*
        Type               typeof
i)    Object                object
ii)   Array                 object
iii)  Function              function(object)
*/
// const a = [1,2,5,3,6]
// let obj = {
//     name : 'bhavnesh',
//     k : 256,
//     l:[1,2,3,5,{a:[{
//         a:"name",
//         b:123
//     }]}]
// }
// // console.log(obj.l[4].a);
// for(var i = 0; i<obj.l.length;i++){
//     var e = obj.l[i]
//     if(typeof e === 'object'){
//         for(var j = 0; j<e.a.length; j++){
//             var k = e.a[j]
//             console.log(k);
//         }
//     }
// }

//  stack(primitve) heap(non-primitive)

let name = "bhavnesh"
let anotherName = name
anotherName = "mehra" + name
// console.log(anotherName);
var obj = {
    user:"bsmehra410@gmail.com",
    a : [1,2,34,{
        a:"bhavnesh",
        l:[1,2,3,4,50],

    }],
}
// console.log(obj);
for(var i = 0;i<obj.a.length;i++){
    if(typeof obj.a[i] === 'object'){
        console.log(obj.a[i].l)
    }
} 

let n = "bhavnesh"
let p = n
console.log(n,p);
p = "mehra"
console.log(n,p);