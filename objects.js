
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

console.log(obj,deepCopy1,deepCopy2,deepCopy3)

