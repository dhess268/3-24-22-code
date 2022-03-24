// This function will check if 2 elements are equal in value to each other even if they are object data type
function deepEqual(a, b){
    let result = true
    if(typeof a === "object"&& typeof b === "object" && a !== null && b !== null){
        for(let key in a) {
            let aValue = a[key]
            let bValue = b[key]
            if(typeof aValue === 'object' || typeof bValue === 'object'){
                 result = deepEqual(aValue, bValue)
                 if(result === false){
                     return false
                 }
            }
            else if(!(key in b) || aValue !== bValue){
                console.log(aValue !== bValue)
                return false
            }
        }
        for(let key in b) {
            let aValue = a[key]
            let bValue = b[key]
            if(typeof aValue === 'object' || typeof bValue === 'object'){
                result = deepEqual(aValue, bValue)
                if(result === false){
                    return false
                }
           }
            else if(!(key in a) || aValue !== bValue){
                return false
            }
        }
        
    }
    else {
        if(a !== b) {
            return false
        }
    }
    return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
