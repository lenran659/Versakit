// eslint-disable-next-line @typescript-eslint/no-require-imports
const figlet = require('figlet')

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
}
