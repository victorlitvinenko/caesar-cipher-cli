## Caesar cipher CLI tool.
*(encrypts only latin letters, case insensitive)*

### Сommand line parameters:

- **-s, --shift** \<number\> - How many characters to shift
- **-i, --input** \<fileName\> - File path for encryption / decryption
- **-o, --output** \<filePath\> - File path for recording the encryption / decryption result
- **-a, --action** \<encode/decode\> - specify \<encode\> for encryption, \<decode\> - for decryption

### Example:
```
$ node task1/my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
*encodes information from the **plain.txt** with a 7 characters shift and writes the result to the **encoded.txt*** 
