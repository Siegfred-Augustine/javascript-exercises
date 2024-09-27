const reverseString = function(line) {
    let newLine = "";
    for(let i = 1; i<=line.length; i++){
        newLine += line[line.length - i];
    }
    return newLine;
};

// Do not edit below this line
module.exports = reverseString;
