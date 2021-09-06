function* numbersGen(){
    let i = 1;


    yield 1;
    console.log(7)
    yield 2;
    yield 3;
    yield 4;
    return("sapna")   // { value: 'sapna', done: true }
    console.log("sapna") //     sapna
    let i=1;          // { value: undefined, done: true }
    while(i<3){
        yield i++;
        yield (i++).toString();
    }
    return i
}

const gen = numbersGen();
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().value)


var txt = "abc,d,e";   
txt.split(",");     
// txt.split(" ");
console.log(txt);