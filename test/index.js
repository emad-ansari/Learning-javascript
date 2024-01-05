console.log('hello world');
function findDifference(oldTodo, newTodo){
    // you have given two array find the difference betweeen two array
    let added = [];
    let removed = [];
// [1, 2, 3, 4] [2, 3, 4, 5]
    // if newTodo.length > oldTodo => means that some new todo added
    const LenghtDiff  = newTodo.length - oldTodo.length;
    let startIndex = -1;
    if (LenghtDiff > 0){
        // means that new todo item is added 
        startIndex = newTodo.length - LenghtDiff;
        for (let i = startIndex; i < newTodo.length; i++){
            added.push(newTodo[i]);
        }
    }
    else if (LenghtDiff < 0){
        console.log('hi ')
        startIndex = oldTodo.length - Math.abs(LenghtDiff);
        for (let i = startIndex; i < oldTodo.length; i++){
            removed.push(oldTodo[i]);
        }
    }
    
    return {    
        added,
        removed
    }

}

console.log(findDifference([1, 2, 3, 4, 5, 6], [1,2, 3, 4, 5 ,6, 7]));