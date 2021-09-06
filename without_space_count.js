var myString=["my name is praveen","my hobby is playing cricketa"]
var i=0;
var store=[]
var storelength=[]
while(i < myString.length){
    let remText = myString[i].replace(/ /g, "");
    
    storelength.push(remText.length)
    store.push(remText)
    i++;
}
console.log(storelength)
console.log(store)
var mainDict={}
var vowelList=["a","e","i","o","u"]
var i=0;
while (i<store.length){
    var j=0;
    let main={ }
    let count=0;
    let myArr={}

    while (j<store[i].length){

        if( vowelList.includes(store[i][j])){
            count=count+1;

        }
        j++;
    }
    // console.log(count)
    myArr["vowel"]=count
    console.log(myArr)

    

    
    
    i++;
}
