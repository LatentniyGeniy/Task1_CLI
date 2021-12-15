const fs = require('fs');
const stream = require('stream');
const util = require('util');
const program = require('commander');

const TransformStream = require("../Task1_CLI/module/transformStream.js");
const Validator = require("../Task1_CLI/module/validator.js")

const pipeline = util.promisify(stream.pipeline);


const actions = async () => {
    const {input, output, task} = program.opts();

    if (task !== 't1.1' && task !== 't1.2') {
        process.stderr.write(`Task must be "t1.1" or "t1.2"\n`);
        process.exit(1);
    }

    input === undefined && process.stdout.write('Enter the text and press ENTER to t1.1/t1.2 | press CTRL + C to exit: ')

    const ReadableStream =  Validator.isStr(input) && Validator.fileEx(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = Validator.isStr(output) && Validator.fileEx(output) ? fs.createWriteStream(output): process.stdout;

    try {
        if (Validator.fileEx(input) || Validator.fileEx(output) || input === undefined || output === undefined){
            await pipeline(
                ReadableStream,
                new TransformStream(task),
                WriteableStream
            )
        } else{
            process.stderr.write( `file does not exist!!!\n`);
            process.exit(2);
        }
    } catch (e) {
        process.stderr.write( `${e.message}\n`);
        process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
    .requiredOption('-t --task <task>', 'An task t1.1/t1.2')
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .action(actions)

program.parse(process.argv);