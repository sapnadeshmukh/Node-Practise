// var a="0x55"
// // a=a.toFixed(2)
// // console.log(a)
// // 12.346

// const { number } = require("joi");

// a=parseInt(a)
// console.log(a)


// // Three types of conversion

// // The first rule to know is there are only three types of conversion in JavaScript:

// //     to string
// //     to boolean
//     // to number


// String(123)                   // '123'
// String(-12.3)                 // '-12.3'
// String(null)                  // 'null'
// String(undefined)             // 'undefined'
// String(true)                  // 'true'
// String(false)                 // 'false'


// Boolean('')           // false
// Boolean(0)            // false     
// Boolean(-0)           // false
// Boolean(NaN)          // false
// Boolean(null)         // false
// Boolean(undefined)    // false
// Boolean(false)        // false


// Boolean({})             // true
// Boolean([])             // true
// Boolean(Symbol())       // true
// !!Symbol()              // true
// Boolean(function() {})  // true



// Number(null)                   // 0
// Number(undefined)              // NaN
// Number(true)                   // 1
// Number(false)                  // 0
// Number(" 12 ")                 // 12
// Number("-12.34")               // -12.34
console.log(Number("\n")  )                 // 0
// Number(" 12s ")                // NaN
// Number(-123)                    // 123

function number_test(n){
    var result = (n - Math. floor(n)) !== 0;
    if (result){
        return 'Number has a decimal place.';
    }   else{
    return 'It is  number.';
    }
}
console.log(number_test("12"))