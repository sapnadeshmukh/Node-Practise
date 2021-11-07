function reverseStr(str){

    
        return str ? reverseStr(str.substr(1)) +str[0] :str;


    
    
}
console.log(reverseStr("hello"))