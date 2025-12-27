let input  = [1,2,3,4,5]

Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

console.log("Map Polyfill",input.myMap((item)=>item*2));

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i = 0;i<this.length;i++){
        if (cb(this[i],i,this)) temp.push(this[i])
    }
    return temp;
}

console.log("Filter Polyfill",input.myFilter((item)=>item>2));



Array.prototype.myReduce = function(cb,initialValue){
    let accumulator = initialValue;
    for (let i = 0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

console.log("Reduce Polyfill",input.myReduce((acc,curr)=>acc+curr));

// -------------------------------------------

function createBase(num){
    return function(innerNum){
        return num + innerNum
    }
}
const addSix = createBase(6);

console.log("Curry base example",addSix(130))


function once(func,context){
    let ran;
    return function(){
        if (func){
            ran = func.apply(context || this,arguments)
            func = null
        }
        return ran
    }
}
const hello = once(()=> console.log("Call Once Example"))

hello()
hello()
hello()
hello()

function recursiveSum(a){
    return function(b){
        if(b) return recursiveSum(a+b);
        return a;
    }
};

console.log("Currying Sum",recursiveSum(2)(3)(4)());

function evaluate(opt){
    return function(num1){
        return function(num2){
            switch(opt){
                case "add":
                    return `Sum is ${num1 + num2}`;
                    break;
                case "sub":
                    return `Diff is ${num1 - num2}`;
                    break;
                case 'divide':
                    return `Ans is ${num1/num2}`;
                    break;
                default:
                    return `Ans is ${num1*num2}`;
                    break;
            }
        }
    }
}

console.log(evaluate("")(4)(3))

function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func(...args);
        }else{
            return function(...nxt){
                return curried(...args,...nxt)
            }
        }
    }
}


function simpleSum(a,b,c){
    return a+b+c;
};

const total = curry(simpleSum);
console.log("Curry implementation",total(2)(3)(4))




// ---------------------------


const obj = {
    num1:1,
    num2:2,
    name:"John"
}

const obj2 = {
    num1:1,
    num2:2,
    name:"John"
}

function multiplyObj(obj){
    for (key in obj){
        if (typeof obj[key]==="number") {
            obj[key]*=200;
        }else{
            delete obj[key]
        }
    }
    return obj;
}
console.log("Object",multiplyObj(obj2))


// Deep copy

const deepCopy1 = Object.assign({},obj);
const deepCopy2 = JSON.parse(JSON.stringify(obj));
const deepCopy3 = {...obj}
deepCopy1.name = "Doe"
deepCopy2.name = "Doe2"
deepCopy3.name = "Doe3"

// console.log(obj,deepCopy1,deepCopy2,deepCopy3)


// -------------------------------------


class User {
    constructor(n,age){
        this.name=n
        this.age= age
    }
    
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

const user = new User("Niraj",20)
user.age=30
const {age,name}=user

console.log(name,age)


function makeUser  (){
    return {
        name:"John Doe",refrence(){
            return this
        }
    }
}
const johnUser = makeUser()

console.log(johnUser.refrence().name)


let calc = {
    read(){
        this.a = +prompt("a=",0)
        this.b = +prompt("b=",0)
    },
    
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}

calc.read()
console.log(calc.sum())
console.log(calc.mul())


const calculator = {
    totalResult:0,
    add(a){
        this.totalResult+=a;
        return this;
    },
    mul(a){
        this.totalResult*=a;
        return this;
    },
    sub(a){
        this.totalResult-=a;
        return this;
    }
    
}

const totalResult = calculator.add(10).mul(5).sub(30)

console.log("Calculator result",totalResult.totalResult)


















