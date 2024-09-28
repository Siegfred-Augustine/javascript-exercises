const removeFromArray = function(arr, ...elements) {

    function removeAll(value){
        return !elements.includes(value);
    }
    return arr.filter(removeAll);
};

// Do not edit below this line
module.exports = removeFromArray;
