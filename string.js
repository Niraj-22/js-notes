let fullName = "Niraj Rajesh Chordia"

function reverseStr(s){
    let result = "";
    
    for (let char of s){
        result = char + result
    }
    return result
}

function reverseWords(str){
    let words = str.split(" ");
    let result = ""
    for(word of words){
        result+=reverseStr(word) + " "
    }
    return result
}

console.log(reverseWords(fullName))
