import PDFDocument from 'pdfkit-table'
import fs from 'fs'
import { utilService } from './services/utils.service.js'

const countries = utilService.readJsonFile('data/countries.json')
const mappedAndSorted = getMappedAndSortedCountries(countries)

// init document
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// connect to writeStream
doc.pipe(fs.createWriteStream('./data/countries.pdf'))

createPdf(doc)
    .then(() => doc.end())

function createPdf() {
    const mappedAndSorted = getMappedAndSortedCountries(countries)
    const table = {
        title: 'Countries of the world',
        subtitle: 'Sorted by name',
        headers: ['Country', 'Capital', 'Population'],
        rows: mappedAndSorted.map(country => [country.name, country.capital, country.population],)
    }
    return doc.table(table, { columnsSize: [150, 125, 125] })
}

function getMappedAndSortedCountries(countries) {
    return countries.map(country => {
        return country = {
            name: country.name.common,
            capital: country.capital,
            population: country.population
        }

    }).sort((countryA, countryB) => countryA.name.localeCompare(countryB.name))
}
