const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const srcdir = path.join(__dirname, 'src')

const files = fs.readdirSync(srcdir)
   .filter(file => file.endsWith('.ts'))
   .map(file => ({
      name: file,
      time: fs.statSync(path.join(srcdir, file)).mtime.getTime()
   }))
   .sort((a, b) => b.time - a.time) // Sort: latest modifie first

const latestFile = files[0]?.name

if(latestFile) {
   const filePath = `./src/${latestFile}`
   console.log(`\x1b[36m>>Running file at:${filePath}\x1b[0m\n`) // Cyan colered log
   execSync(`ts-node ${filePath}`, { stdio: 'inherit' })
}

else {
   console.error('\x1b[31mNo Typescript files found in src folder.\x1b[0m') // Red colored error
   process.exit(1)
}