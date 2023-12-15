const accountId = 20;
let email = 'bsmehra410@gmail.com'
var accountPassword = '12345'
accountCity = "Delhi" // equal to var 

var state;
/*{
    scope
    leyt,const(block scope)
}*/
// accountId = 26  not allowed assignment on constant variable and not support declaration of same name 
/* 
prefer not to use var because of issue in block scope and functional scope 
 */

email = '2514688455' // let keyword allow assignment but not support declaration of same name 
console.table([accountId,accountPassword,email,accountCity.state])

/* state = undefined because we didn't declare any value to state */