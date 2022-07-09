import getCountries from "../services/countries.service.js";

let countriesAndLangs = [];
let countries = [];
let languages = [];

countriesAndLangs = await getCountries()

const settingLang = () => {
    countriesAndLangs.map((countriesAndLangs) =>
        languages.push(countriesAndLangs.languages)
    )
}

const countriesInTheWorld = () => {
    countriesAndLangs.map((countriesAndLangs) =>
        countries.push(countriesAndLangs.country)
    )
    return `The number of countries in the world is: ${countries.length}`
}


const countryHighestNumberOfficialLangs = (countriesAndLangs) => {
    let _countries = [];
    let _mostLangCountries = [];

    let _mostLangs = 0;

    for (let index = 0; index < countriesAndLangs.length; index++) {
        if (countriesAndLangs[index].languages.length > _mostLangs) {
            _mostLangs = countriesAndLangs[index].languages.length;
        }
    }

    _mostLangCountries = countriesAndLangs.filter(countries => {
        return countries.languages.length >= _mostLangs;
    })

    _countries = _mostLangCountries.map(countries => {
        return countries.country
    })

    return `The country with the highest number of official languages is ${_countries}`
}

const hasMoreLanguagesAndIncludeSpecifiedLanguage = (country, wishedLanguage, mostLanguages) => {
    return country.languages.length >= mostLanguages && country.languages.includes(wishedLanguage)
}

const countryHighestNumberOfficialLangsWithWishedLang = (countriesAndLangs, wishedLang) => {
    let _countries = [];
    let _mostLangCountries = [];
    let _mostLangs = 0;


    for (let index = 0; index < countriesAndLangs.length; index++) {
        if (hasMoreLanguagesAndIncludeSpecifiedLanguage(countriesAndLangs[index], wishedLang, _mostLangs)) {
            _mostLangs = countriesAndLangs[index].languages.length;
        }
    }


    _mostLangCountries = countriesAndLangs.filter(country => {
        return hasMoreLanguagesAndIncludeSpecifiedLanguage(country, wishedLang, _mostLangs)
    })


    _countries = _mostLangCountries.map(country => {
        return country.country
    })

    return `The country with the most official languages, where they officially speak German is ${_countries}`
}

const mostCommomLanguages = (languages) => {
    let _commomLangs = [];
    for (let langIndex = 0; langIndex < languages.length; langIndex++) {
        languages[langIndex].filter(langague => {
            for (let secIndex = langIndex + 1; secIndex < languages.length; secIndex++) {
                languages[secIndex]
                    .find(item => {
                        if (langague === item) _commomLangs.push(item);
                    })
            }
        })
    }
    return `The most commom official languages of all countries are: ${_commomLangs}`
}

settingLang()

console.log(countriesInTheWorld())
console.log(countryHighestNumberOfficialLangs(countriesAndLangs));
console.log(countryHighestNumberOfficialLangsWithWishedLang(countriesAndLangs, 'de'));
console.log(mostCommomLanguages(languages))