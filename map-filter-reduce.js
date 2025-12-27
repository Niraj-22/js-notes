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
