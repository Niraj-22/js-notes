
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


