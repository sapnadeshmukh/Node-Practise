const express=require("express")
const cookieParser=require("cookie-parser")

const app=express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("helloooooo")
})

app.get("/set-cookie",(req,res)=> {
    // res.setHeader('set-cookie',"foo=sa")
    res.cookie("foo","bar")    
    res.cookie("frd","sona",{expires:new Date ("10 july 2021")})
    res.cookie("name","sapna",{httpOnly:true})
    res.cookie("age",23,{secure:true})
    res.cookie("surname","Deshmukh",{domain:"sapna.com"})
    res.cookie("ng","student",{maxAge:2000})

    console.log(req.cookies)// to see cookies
    res.send("cookies is set ")
})

app.get("/get-cookie",(req,res)=> {
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get("/del-cookie",(req,res)=> {
    res.clearCookie("fizz")
    res.send("cookie has been deleted")
})

app.listen(3400,()=>console.log(`server on port 3400`))



