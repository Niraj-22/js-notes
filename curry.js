
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
