// Date

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString()); // 1/11/2024
// console.log(myDate.toDateString()); // day month date year
// console.log(typeof myDate); // object


// let mycreateddate = new Date(2024,0,11)
// let mycreateddate = new Date(2024,0,11,5,3)
let mycreateddate = new Date("01-11-2024")
// console.log(mycreateddate);
// console.log(mycreateddate.toDateString());
// console.log(mycreateddate.toLocaleDateString());
// console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth());

console.log(myDate.toLocaleString('default',{
    weekday:"long",
    year:'2-digit',
    month:"long"
}));