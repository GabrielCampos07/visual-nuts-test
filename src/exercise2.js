import getCountries from "../services/countries.service.js";

let countriesAndLangs = [];
let languages = [];

countriesAndLangs = await getCountries();

const settingLangs = (countriesAndLangs) => {
    languages = countriesAndLangs.map((countriesAndLangs) => {
        return countriesAndLangs.languages;
    });
}

const countriesInTheWorld = (countriesAndLangs) => {
    let _countries = countriesAndLangs.map((countriesAndLangs) => {
        return countriesAndLangs.country;
    })
    return `The number of countries in the world is: ${_countries.length}`;
}


const countryHighestNumberOfficialLangs = (countriesAndLangs) => {
    let _countries = [];
    let _mostLangCountries = [];

    let _mostLangs = 0;

    countriesAndLangs.forEach(countryAndLang => {
        if (countryAndLang.languages.length > _mostLangs) {
            _mostLangs = countryAndLang.languages.length;
        }
    });

    _mostLangCountries = countriesAndLangs.filter(countries => {
        return countries.languages.length >= _mostLangs;
    })

    _countries = _mostLangCountries.map(countries => {
        return countries.country;
    })

    return `The country with the highest number of official languages is ${_countries}`;
}

const hasMoreLanguagesAndIncludeSpecifiedLanguage = (country, wishedLanguage, mostLanguages) => {
    return country.languages.length >= mostLanguages && country.languages.includes(wishedLanguage);
}

const countryHighestNumberOfficialLangsWithWishedLang = (countriesAndLangs, wishedLang) => {
    let _countries = [];
    let _mostLangCountries = [];

    let _mostLangs = 0;

    countriesAndLangs.forEach(countryAndLang => {
        if (hasMoreLanguagesAndIncludeSpecifiedLanguage(countryAndLang, wishedLang, _mostLangs)) {
            _mostLangs = countryAndLang.languages.length;
        }
    });


    _mostLangCountries = countriesAndLangs.filter(country => {
        return hasMoreLanguagesAndIncludeSpecifiedLanguage(country, wishedLang, _mostLangs);
    });


    _countries = _mostLangCountries.map(country => {
        return country.country;
    });

    return `The country with the most official languages, where they officially speak German is ${_countries}`;
}

const mostCommomLanguages = (languages) => {
    let _countLanguage = [];
    let _mostCommomLanguage = [];

    languages.forEach(languageArray => {
        languageArray.forEach(language => {
            if (_countLanguage[language] === undefined) {
                _countLanguage[language] = 1;
                return;
            }
            _countLanguage[language]++;
        });
    });

    let _teste = Object.values(_countLanguage);
    let _max = Math.max(..._teste);

    Object.keys(_countLanguage).forEach(key => {
        if (_countLanguage[key] === _max)
            _mostCommomLanguage.push(key);
    })

    return `The most commom official languages of all countries are: ${_mostCommomLanguage}`;
}

settingLangs(countriesAndLangs);

console.log(countriesInTheWorld(countriesAndLangs));
console.log(countryHighestNumberOfficialLangs(countriesAndLangs));
console.log(countryHighestNumberOfficialLangsWithWishedLang(countriesAndLangs, 'de'));
console.log(mostCommomLanguages(languages));