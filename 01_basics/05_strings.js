let name = "bhavnesh,mehra \
               hgbgg";
// let repoCount = 50
// console.log(name + repoCount); 
// console.log(name.__proto__);
// console.log(name);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('a'));
// const new_l = name.substring(0,4)
// console.log(new_l);
// const ano = name.slice(-14,4)
// console.log(ano);

const a =( function (){
    let private = 0;
    function changebyval(val){
        private+=val;
    }
        return {
            increment(){
                changebyval(1)
            },
            decrement(){
                changebyval(-1)
            },
            value(){
                return private
            },
        };

    }
)();

console.log(a.value());
a.increment()
console.log(a.value());
a.increment()
console.log(a.value());
a.decrement()
console.log(a.value());


var b = (function(a,b){
    return{
        add(a,b){
            return a+b
        }
    }
})();
console.log(b.add(5,10));