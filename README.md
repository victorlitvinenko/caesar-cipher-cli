# Caesar cipher CLI tool
*(encrypts only latin letters, case insensitive)*

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Install:
First you need to clone the repo:
```
git clone https://github.com/victorlitvinenko/caesar-cipher-cli.git
```
Next go to the repo directory and install all dependencies:
```
npm install
```
After that type the console command with the node interpreter. For example:
```
node ./task1/my_caesar_cli -a encode -s 3
```

## Сommand line parameters:

- **-s, --shift** \<number\> - How many characters to shift
- **-i, --input** \<fileName\> - File path for encryption / decryption
- **-o, --output** \<filePath\> - File path for recording the encryption / decryption result
- **-a, --action** \<encode/decode\> - specify \<encode\> for encryption, \<decode\> - for decryption

## Example:
```
node task1/my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
*encodes information from the **plain.txt** with a 7 characters shift and writes the result to the **encoded.txt*** 

*If one of the files does not exist, an error will appear*
