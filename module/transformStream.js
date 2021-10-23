const { Transform } = require('stream');

const { duplicateEncode } = require('./duplicateEncode.js');
const { multiplication } = require('./multiplication.js');

class TransformStream extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(chunk, _, done) {
        let result = '';

        switch (this.action) {
            case 't1.1':
                result = duplicateEncode(chunk.toString('utf8'));
                break;
            case 't1.2':
                result = multiplication(chunk);
                break;
            default:
                process.stderr.write(' Erorr: Action not found\n');
                process.exit(1);
        }

        this.push(result);
        done();
    }
}

module.exports = TransformStream;