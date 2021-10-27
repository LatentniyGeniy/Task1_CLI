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
3. -t, --task: an task t1.1/t1.2

explanation: 

* task t1.1 - duplicateEncode function
* task t1.2 - multiplication function

t1.1 input.txt to output.txt :

```
$ [node] index  -i "./input.txt" -o "./output.txt" -t t1.1
```

t1.2 input2.txt to output2.txt :

```
$ [node] index --input input2.txt --output output2.txt --task t1.2
```

t1.1 stdin to stdout:

```
$ [node] index --task t1.1
```
