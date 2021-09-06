const jwt=require("jsonwebtoken")

const createToken=async()=>{

    const token=await jwt.sign({"email":"sapnad18@navgurukul.org"},"sapna")
    console.log(token)


    const userVer=await jwt.verify(token,"sapna")
    console.log(userVer)
}
createToken()

