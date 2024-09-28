const leapYears = function(year) {
    function isDivisible(year, divisor){
        if(year%divisor === 0)
            return true;
        return false;
    }

    if(isDivisible(year, 100)){
        if(isDivisible(year, 400))
            return true;
        return false;
    }
    if(isDivisible(year, 4)){
        return true;
    } 
    
    return false;
};

// Do not edit below this line
module.exports = leapYears;
