

var list = {"c": [3], "b": [12, 10], "a": [19, 4]}
var swaping;
// Output : {‘a’: [4, 19], ‘b’: [10, 12], ‘c’: [3]}
for (var i = 0; i < list.length; i++) {
    for (var j = 1; j < list.length; j++) {
      if (list[i]> list[i + 1]) {
        swapping = list[i + 1];
        list[i + 1] = list[i];
        list[i] = swapping;
        }; 
    }; 
};
console.log(list)


var word=["a","b","c","d","e"]
var d={}
var i=0
var l=word.length
while (i<l){
    d[word[i]]=i+1
    i++;
}
console.log(d)

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
                             
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
console.log(typeof(NaN))
