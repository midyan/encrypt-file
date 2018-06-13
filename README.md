# encrypt-file

Simple nodejs to encrypt file

## How use

```sh
npm install -g encrypt-file
```

Then use the cli.

### Encrypt a file

You need to provide the relative path to the file you want to encrypt and the password to encrypt with.

```sh
encrypt-file enc ../test.txt 123456
```

The output file will be written in the directory you have run the command with a trailing `.enc`

## Decrypt the file

You need to provide the relative path to the encrypted file and the password

```sh
encrypt-file dec ../test.txt.enc 123456
```

The output file will be written in the directory you have run the command without the trailing `.enc`
