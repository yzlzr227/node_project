function StringParser(input){
    this.stringToParse = input;
    this.staticTable = new {};
    for (var i = 0; i < this.stringToParse.length; i+=1){
        if (this.staticTable[this.stringToParse[i]]){
            this.staticTable[this.stringToParse[i]] = this.staticTable[this.stringToParse[i]] + 1;
        }else{
            this.staticTable[this.stringToParse[i]] = 0;
        }
    }
}

StringParser.prototype.NumOfOccurance = function(target){
    if (typeof target != 'string' && target.length != 1)    throw new Exception("Invalid Argument");
    if (!this.stringToParse)    return 0;
    var occurance = 0;
    for (var i = 0; i < this.stringToParse.length; i+= 1){
        if (this.stringToParse[i] === target)
            occurance += 1;
    }

    return occurance;
};

StringParser.prototype.MostOccurance = function(){
    var max = 0;
    var ans;
    for (var key in this.staticTable){
        if (this.staticTable[key] > max){
            max = this.staticTable[key];
            ans = key;
        }
    }
    return key;
};

StringParser.prototype.MinimumOccurance = function () {
    var min = this.stringToParse.length + 1;
    var ans;
    for (var key in this.staticTable){
        if (this.staticTable[key] < min){
            min = this.staticTable[key];
            ans = key;
        }
    }
    return ans;
};