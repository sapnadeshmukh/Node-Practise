var list=[
    { Username: 'sapna', Password: 'Sapna@12' },
    { Username: 'monika', Password: 'Monika@12' },
    { Username: 'Sakshi', Password: 'Sakshi@12' },
    { Username: 'abhay', Password: 'Abhay@12' },
    { Username: 'sofiya', Password: 'Sofiya@12' },
    { Username: 'sapna', Password: 'Sapna@12' },
    { Username: 'aarati', Password: 'Aarati@12' }
  ]
const readlinesync=require("readline-sync")
const username=readlinesync.question("Enter name:----")


for (i in list){
  var a = list[i]["Username"]
  if (a==username){
      break
  }
}
if(a==username) {
  console.log('already exists')
}else{
  console.log(' NOt already exists')


}





