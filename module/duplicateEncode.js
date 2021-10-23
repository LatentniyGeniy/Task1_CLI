
module.exports.duplicateEncode = function duplicateEncode(str){

    str = str.toLowerCase().split("");
    let key = [], result = "";
    for (let i = 0; i < str.length; i++) {
        if (key[str[i]] === undefined) key[str[i]] = 1;
        else key[str[i]]++
    }
    for (let k = 0; k < str.length; k++) {
        if (key[str[k]] === 1) result += "(" ;
        else result += ")";
    }

    result = (str.slice(-1)).toString() === '\n' ? result.slice(0, -2) : result

    return result + '\n'
};
