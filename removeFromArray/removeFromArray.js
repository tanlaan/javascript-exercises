const removeFromArray = function() {
    let things, toRemove=[];
    for (let i=0; i < arguments.length; i++){
        if (i === 0){
            things = arguments[i];
        } else {
            toRemove.push(arguments[i]);
        }
    }
    for(let i=0; i < toRemove.length; i++){
        for(let j=0; j < things.length; j++){
            if(toRemove[i] === things[j]){
                things.splice(j, 1);
            }
        }
    }
    return things;
}

module.exports = removeFromArray
