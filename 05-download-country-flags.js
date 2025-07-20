import { utilService } from './services/utils.service.js'

const countries = utilService.readJsonFile('data/countries.json')

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}

function getCountries() {
    return countries.map(country => {
        return country = {
            name: country.name.common,
            population: country.population,
            flag: country.flags.png,
        }

    }).sort((countryA, countryB) => countryB.population - countryA.population)
        .slice(0, 5)
}

function downloadFlags(countries) {
    const prms = countries.map(country => {
        return utilService.download(
            country.flag,
            `data/flags/${country.name}.png`,
            console.log(' country.flags.svg:', country.flag)
        )
    })
    return Promise.all(prms)
}