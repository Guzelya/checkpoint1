/* eslint-disable no-unused-vars */
function multiplicationTable(rows,columns){
    let result = [];
    for ( let i = 1; i <= rows; i++){
        let arr = [];
        for ( let j = 1; j <= columns; j++){
            let val = i * j;
            arr.push(val);
        }
        result.push(arr);
    }
 
    console.log(result);
    return result;
}
multiplicationTable(4,5);