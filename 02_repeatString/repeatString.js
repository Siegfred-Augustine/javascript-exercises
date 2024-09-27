const repeatString = function(line, number) {
    if(number<0)
        return "ERROR";
    
    let fullLine = "";
    for(let i = 0; i<number; i++){
        fullLine += line;
    }
    return fullLine;
};

// Do not edit below this line
module.exports = repeatString;
