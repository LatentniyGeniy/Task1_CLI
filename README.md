## CLI tool

### Downloading and installing NPM modules

```
$ git clone https://github.com/LatentniyGeniy/Task1_CLI.git
```

```
$ cd Task1_CLI
```

```
$ npm i
```

### (optional) Installing the application as an NPM module

```
$ [sudo] npm i -g ./
```

### Usage example:

CLI tool accept 3 options:

1. -i, --input: an input file
2. -o, --output: an output file
3. -a, --action: an action t1.1/t1.2

explanation: 

* action t1.1 - duplicateEncode function
* action t1.2 - multiplication function

t1.1 input.txt to output.txt :

```
$ [node] rot  -i "./input.txt" -o "./output.txt" -a t1.1
```

t1.2 input2.txt to output2.txt :

```
$ [node] rot --input input2.txt --output output2.txt --action t1.2
```

t1.1 stdin to stdout:

```
$ [node] rot --action t1.1
```
