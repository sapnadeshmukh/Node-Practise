const myPromise=new Promise((resolve,reject)=>{
  var arr=[1,3,5,6]
  var i;
  const newarr=[];
  for (i=1;i<=arr.length;i++){
      if (!(arr.includes(i))){
        newarr.push(i)
      }
      
  
  }
  resolve(newarr)
  

})
myPromise.then((result)=>{
  console.log(result)
})


