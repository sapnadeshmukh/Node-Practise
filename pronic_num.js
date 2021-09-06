const myPromise=new Promise((resolve,reject)=>{
    var readlinesync =require("readline-sync")
    var number =parseInt(readlinesync.question("enter any Number:---"))
    let index;
    for (index=0;index <= number;index++){

        let NextNum=index+1
        let product=index*NextNum
        if (number==product){
            console.log("It's Pronic Number.")
            break

        }


    }

})