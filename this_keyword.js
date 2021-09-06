console.log(this) // {}

function num(){
    console.log(this)
}
// num() // Object[global]


class Person{
    constructor(){
        this.key="hii",
        this.name="sapna"
    }
    add(){
        return(this)
    }
}
var newPerson=new Person()
console.log(newPerson.add())// Person { key: 'hii', name: 'sapna' }


var a={
    x:22,
    y:"Hii",
    sum:function z (){
        console.log(this)
    }
}
a.sum()// { x: 22, y: 'Hii', sum: [Function: z] }


