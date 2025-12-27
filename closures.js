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
