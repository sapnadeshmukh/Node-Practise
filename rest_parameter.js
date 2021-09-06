function addAllArgs(...args){
    return args
    let sumOfArgs = 0;
    let i = 0;
    while(i < args.length){
      sumOfArgs += args[i];
      i++;
    }
    return sumOfArgs;
  }
  
console.log(addAllArgs(1, 3, 4)); // Returns 8
  