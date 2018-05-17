const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

module.exports = (sourceFile, password) =>
    new Promise((resolve, reject) => {
        try {
            const processPath = process.cwd()
            const sourcePath = path.resolve(processPath, sourceFile)
            const outputPath = `${sourcePath}.enc`

            const cipher = crypto.createCipher('aes-256-cbc', password)

            const input = fs.createReadStream(sourcePath)
            const output = fs.createWriteStream(outputPath)

            input.pipe(cipher).pipe(output)

            output.on('finish', function() {
                resolve(outputPath)
            })
        } catch (error) {
            reject(error)
        }
    })
