#!/usr/bin/env node

const [
    node,
    file,
    command,
    sourceFile,
    password,
] = process.argv

process.on('unhandledRejection', event => {
    console.log('SOMETHING WENT WRONG', event)
    process.exit(0)
})

const commands = require('./commands')

const commandFunction = commands[command]

if (!commandFunction) {
    throw new Error('Command not found')
}

if (!sourceFile) {
    throw new Error('Missing source file')
}

if (!password) {
    throw new Error('Missing password')
}

commandFunction(sourceFile, password)
    .then(outputPath => {
        console.log(`File saved at ${outputPath}`)
    })
    .catch(err => {
        throw err
    })
