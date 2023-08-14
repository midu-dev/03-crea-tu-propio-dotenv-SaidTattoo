const dotenv = require('./index.js')
dotenv.config() // Carga el archivo .env por defecto en el directorio actual
console.log(process.env.PORT) // Imprime el valor de PORT en .env si existe
console.log(process.env.TOKEN)

dotenv.config({ path: '.env.local' }) // Carga otro archivo .env en una ubicación específica
console.log(process.env.SOMETHING) // Imprime el valor de SOMETHING en .env.local si existe
