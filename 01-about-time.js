import ms from 'ms'
import fs from 'fs'



const timeStamps = fs.readFileSync('data/about-time.txt', 'utf8')
const splitLines = timeStamps.split(/\r\n/)

aboutTime()

function aboutTime() {
    splitLines.forEach(line => {
        const numberedDate = parseInt(line)
        const now = Date.now()
        const diff = ms(numberedDate, { long: true })
        console.log(diff, 'ago')
    })

}

