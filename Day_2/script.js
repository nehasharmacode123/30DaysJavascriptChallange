// function

// doubt 
// function printVariable(variable){
//     console.log(variable);
    
// }

// function func(x){
//     console.log('before');
//     x("hello world")
//     console.log('after');
    
// }

// func(printVariable)
// console.log(printVariable);
// printVariable("Hii")

// doubt 

// function sumCallback(a,b, callback){
//     return callback(a + b);
// }

// function handleSum(sum){
//     console.log(sum);
    
// }


// sumCallback(1,2,handleSum)

// function printVariable(variable){
//     console.log(variable);
    
// }

// function printName(name, callback){
    
//     callback("hello " + name)
// }

// printName("Kyle", printVariable)


// function printVariable(variable){
//     console.log(variable);
    
// }

// function printName(name, callback){
    
//     callback("hello " + name)
// }

// printName("Kyle", function(variable){
//     console.log(variable);
    
// })

// printName

// Arrow function

// function sum(a,b){
//     return a + b
// }

// let sumArrow = (a,b) => {
//     return a+b
// }

// console.log(sumArrow);


// console.log(sumArrow(1,2));


// function printName(name){
//     console.log(name);
    
// }

// let printName = (name) => 
// console.log(name);
    


// printName("neha")

// function sum(a,b){
//     return a+b
// }

// let sumArrow = (a,b) => a+b;

// console.log(sumArrow(1,2));

// function printHi(name){
//     return "Hi " + name
// }

// let printHiArrow = name => "Hi " + name


// console.log(printHiArrow("neha"))


// function printHi(name){
//     return "Hi " + name
// }

// let printHiArrow = name => {
// return "Hi " + name
// }


// console.log(printHiArrow("neha"))

// function hi(){
//     console.log('Hi');
    
// }

// hi()

// let hiArrow = () => console.log('Hi');

// hiArrow();

// function fnc(x, callback){
//     callback(x)
// }

// fnc(10, (variable)=>{
//     console.log(variable);
    
// });

// function doStuff(a, b, name){
//     print(sum(a,b));
//     print(sayHi(name))
// }

// function print(variable){
//     console.log(variable);
    
// }

// function sum(a, b){

// }

function doStuff(a,b, name){
    print(sum(a,b));
    print(sayHi(name))
}

function print(variable){
    console.log(variable);
    
}

function sum(a,b){
    return a + b;
}

function sayHi(name){
    return "Hi " + name
}

doStuff(1,2, "neha")
