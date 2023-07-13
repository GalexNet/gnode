const fs = require('fs')
const defaultConfig = require('./default-config')

const DEFAULT_CONFIG_PATH = '/config/config.json'

const loadConfig = ({ configPath = DEFAULT_CONFIG_PATH } = {}) => {
  console.log('Attempting to load config...')

  let configData

  try {
    configData = fs.readFileSync(configPath)
    console.log('Config loaded successfully!')
  } catch {
    console.log('No config file found, creating default config...')
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2))

    return defaultConfig
  }

  return JSON.parse(configData)
}

module.exports = {
  loadConfig
}
