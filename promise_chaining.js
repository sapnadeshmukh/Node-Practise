const add=(a,b)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(a+b)
        },1000)
    })
}
add(2,3).then((result)=>{
    console.log(result)
    return add(result,5)
}).then((result)=>{
    console.log(result)
    return add(result,2)
}).then((result)=>{
    console.log(result)
    
})