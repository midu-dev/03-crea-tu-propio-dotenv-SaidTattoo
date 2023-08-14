const fs = require('fs')
const path = require('path')

function parseEnvFile (filePath) {
  const encoding = 'utf8'
  const envData = fs.readFileSync(filePath, encoding)
  const envConfig = {}

  const lines = envData.split('\n')

  for (const line of lines) {
    const [key, value] = line.split('=')
    if (key && value) {
      envConfig[key] = value.replace(/["']/g, '') // Remove quotes from values
    }
  }
  return envConfig
}

function config (options = {}) {
  let envFilePath = '.env'

  if (options.path) {
    envFilePath = options.path
  }

  try {
    const resolvedPath = path.resolve(envFilePath)
    const envConfig = parseEnvFile(resolvedPath)

    for (const key in envConfig) {
      process.env[key] = envConfig[key]
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error reading .env file:', error.message)
    }
  }
}
config()
module.exports = { config }
