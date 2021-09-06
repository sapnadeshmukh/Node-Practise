function multiplyarray(list) {
    var product=1;
    for (var i=0;i<list.length;i++){
        for (var j=0;j<list[i].length;j++){
            product=product*list[i][j]
        }
    }
    return product
    
}
console.log(multiplyarray([[1,2],[2,4]]))



