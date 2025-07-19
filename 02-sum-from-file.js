import fs from 'fs'

sumFromFile('data/nums.txt')
    .then(sum => console.log('sum:', sum))
    .catch(err => console.log('err:', err))

function sumFromFile(path) {
    return new Promise((resolve, reject) => {
        const nums = fs.readFile(path, 'utf8', (err, contents) => {
            if (err) {
                console.log('Cannot read file', err)
                reject(err)
            } else {
                const parsedNums = contents
                    .split(/\r\n/)
                    .map(strdNum => parseInt(strdNum))
                const sum = parsedNums.reduce((acc, num) =>
                    acc + num, 0)
                resolve(sum)
            }
        })
    })
}

