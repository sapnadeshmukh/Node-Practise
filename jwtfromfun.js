const {tokenData ,authenticateToken}=require('./createFunForJWT')


const Data = { email: "sapnad18@navgurukul.org" }
const TOKEN = tokenData(Data, "sapna",{expiresIn: "24h"})

console.log(TOKEN)


const user=authenticateToken(TOKEN,"sapna")
console.log(user)