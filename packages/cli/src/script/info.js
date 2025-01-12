import colors from 'colors'
import os from 'os'
import { execSync } from 'child_process'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const figlet = require('figlet')

function getPnpmVersion() {
  const result = execSync('pnpm -v').toString().trim()
  return result
}

function getNestCLIVersion() {
  const result = execSync('v --version').toString().trim()

  return result
}

export const info = () => {
  console.log(
    figlet.textSync(
      'VersakitCLI',
      {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 120,
        whitespaceBreak: true,
      },
      function (err, data) {
        if (err) {
          console.dir(err)
          return
        }
        console.log(data)
      },
    ),
  )

  console.log(colors.green('System Information'))

  const systemInfo = [
    `OS Version     : ${os.type()} ${os.release()}`,
    `NodeJS Version : ${process.version}`,
    `PNPM Version   : ${getPnpmVersion()}`,
  ]

  systemInfo.forEach((info) => {
    console.log(colors.cyan(info))
  })

  console.log(colors.green('Versakit CLI'))
  console.log(colors.cyan(`Versakit CLI Version : ${getNestCLIVersion()}`))
}
