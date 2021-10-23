
module.exports.multiplication = function multiplication(len) {

    let result = '\n'
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            result += (i * j+' ');
        }
        result += '\n'
    }
    return result
}