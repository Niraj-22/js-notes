Function.prototype.myCall = function(context={},...args){
    if(typeof this !== 'function'){
        throw new Error("It's not callable")
    }
    
    context.fn = this
    context.fn(...args)
}

function greet(age){
    console.log(`Hello ${this.name} ${age} : ${this.role}`)
}

let user = {
    name:"Niraj",
    role:"Dev"
}

greet.myCall(user,34);

Function.prototype.myApply = function (context={},args=[]){
    if(typeof this !=='function'){
        throw new Error("its not callable")
    }
      if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
    
    context.fn=this
    context.fn(...args)
}

greet.myApply(user,[34])

Function.prototype.myBind = function (context={},...args){
      if(typeof this !=='function'){
        throw new Error("its not callable")
    }
    context.fn = this
    return function(...newargs){
        return context.fn(...args,...newargs)
    }
}

const newgreet =greet.bind(user)

newgreet(34)















