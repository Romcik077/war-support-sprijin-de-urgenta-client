/* eslint-disable @typescript-eslint/no-var-requires */
/*   
    Update the CSV files with latest translations
    Run from terminal `npm run translate`
    Enjoy the 1 hour you won not copy pasting
    beer++
*/
const csv = require('csvtojson')
const fs = require('fs')
const mkdirp = require('mkdirp')

//file path from root of project
const csvFilePath = './scripts/translate/JSON_Translations.csv'

// if you're lazy and use file path with spaces
// csvFilePath = csvFilePath.replace(/(\s+)/g, '\\$1');

/**
 *   change as needed
 *   key = used to create the locale folder ex: ./public/locales/{key}/common.json
 *   value = the csv column header for each lang 
 */
const localesMap = {
  ro: 'Romana',
  en: 'Engleza',
  ua: 'Ucrainieana',
  ru: 'Rusa',
}

// the csv column header used for translation keys
const identifier = 'Identifier'

// folder path for the translations
const localesFolderPath = './public/locales'

const translate = async () => {
  const langJsonArray = await csv().fromFile(csvFilePath)

  for (const [key, value] of Object.entries(localesMap)) {
    const languagesMapped = langJsonArray.reduce(
      (acc, cur) => ({ ...acc, [cur[identifier]]: cur[value] }),
      {},
    )

    await mkdirp(`${localesFolderPath}/${key}`)
    fs.writeFileSync(`${localesFolderPath}/${key}/common.json`, JSON.stringify(languagesMapped, null, "  "))
  }
}

translate()
