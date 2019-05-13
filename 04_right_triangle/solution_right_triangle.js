/* eslint-disable no-unused-vars */
function rightTriangle(rows){
    let result =''
    for(let i = rows; i > 0; i--){
        for(let j = 0; j < i; j++){
          result += '*';
        }
        result += '\n';
      }
      result = result.slice(0,-1);
     
     console.log(result);
     return result;
}
rightTriangle(6);