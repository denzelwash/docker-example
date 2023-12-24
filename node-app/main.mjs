import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve))

;(async () => {
  try {
    const name = await prompt("What's your name: ")
    const lastName = await prompt(`Hello ${name}, what's your last name?: `)
    fs.writeFile('./filename.txt', `${name} ${lastName}`, (err) => {
      if (err) throw err
      console.log('File was written')
      process.exit(0)
    })
    rl.close()
  } catch (e) {
    console.error('Unable to prompt', e)
    process.exit(0)
  }
})()
