const fs = require('fs');
const stream = require('stream');
const util = require('util');
const program = require('commander');

const TransformStream = require("../Task1_CLI/module/transformStream");

const pipeline = util.promisify(stream.pipeline);


const actions = async () => {
    const {input, output, action} = program.opts();

    input === undefined && process.stdout.write('Enter the text and press ENTER to t1.1/t1.2 | press CTRL + C to exit: ')

    const ReadableStream =  typeof(input) === 'string' ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = typeof(output) === 'string' ? fs.createWriteStream(output): process.stdout;


    await pipeline(
        ReadableStream,
        new TransformStream(action),
        WriteableStream
    );

}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
    .requiredOption('-a --action <action>', 'An action t1.1/t1.2')
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .action(actions)

program.parse(process.argv);