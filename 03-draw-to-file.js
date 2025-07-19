import { getRandomIntInclusive } from "./services/utils.service.js"
import fs from 'fs'

drawSquareToFile()
function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))
    writeToFile(str)
        .then(() => {
            setTimeout(drawSquareToFile, 200)
        })
}

function getSquare(size) {
    var str = '* '.repeat(size) + '\n'
    for (let i = 0; i < size - 2; i++) {
        str += '*' + '  '.repeat(size - 2) + ' *\n'
    }
    str += '* '.repeat(size) + '\n'
    return str
}

function writeToFile(str) {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/pic.txt', str, err => {
            if (err) reject(err)
            else resolve(str)
        })
    })
}