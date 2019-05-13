/* eslint-disable no-unused-vars */
function findObjPropsHasOwn(obj){
    let result = '';
    for ( let key in obj){
        if(obj.hasOwnProperty(key)){
            result += key+', ';
        }
    }
    result = result.slice(0,-2);
    return result;

}

function findObjKeys(obj){
    let result = [];
    //array.forEach() to iterate through each element of array
    Object.keys(obj).forEach(function(key){
        result.push(`${key}`);
    })
    result = result.sort().join(', ');
    return result;
}