const add = (a,b)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)           
        }, 1000)
    })
}
add(5,6).then((sum)=>{
    console.log(sum)
    return add(sum,2)
    .then((sum2)=>{
        console.log(sum2)
    return add(sum2,6)
    .then((sum3)=>{
        console.log(sum3)
    })
    })

})
.catch(error=>{
    console.log(error)
})