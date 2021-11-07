function f1(name,callback){
    console.log("hiii",name)
    console.log(callback())


}
function f2 (){
    return("navgurukul")
}
f1("sapna",f2)