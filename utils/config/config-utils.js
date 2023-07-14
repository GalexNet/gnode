const fs = require('fs')
const defaultConfig = require('./default-config')

const DEFAULT_CONFIG_PATH = '/config/config.json'

const loadConfig = ({ configPath = DEFAULT_CONFIG_PATH } = {}) => {
  console.log('[CONFIG] Attempting to load config...')

  let configData

  try {
    // try loading the config file
    configData = fs.readFileSync(configPath)
    console.log('[CONFIG] Config loaded successfully!')
  } catch {
    // if the config file doesn't exist, create it
    console.log('[CONFIG] No config file found, creating default config...')

    const defaultConfigJSON = JSON.stringify(defaultConfig, null, 2)
    fs.writeFile(configPath, defaultConfigJSON, (err) => {
      if (err) {
        console.log('[CONFIG] Error creating config file!')
      }
    })

    // return the default config regardless of whether the file was created
    return defaultConfig
  }

  return JSON.parse(configData)
}

module.exports = {
  loadConfig
}
