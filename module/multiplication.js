
module.exports.multiplication = function multiplication(len) {

    let result = [], res = ''
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            res += (i * j+',');
        }
        result += ',['+res+']'
        res = ''
    }
    result = result.slice(1)
    return '['+result+']\n'
}