const axios = require('axios')
const monet = require('monet')
const Validation = monet.Validation
const checkArgs = require('./funk-check-args').checkArgs
const readFile = require('./funk-read').readFile

function update({token, name, description, kind, url, code, file}) {
  // if not code
  code.cata(
    () => {
      console.log(`> checking arguments ...`)
      checkArgs({token, url, kind, name, file}).cata(
        err => { // Bad Cli Arguments
          console.log(err) // change of color
          process.exit(1)
        }, 
        value => { // load file ans create the funktion
          console.log(`> creating ${name.some()} function (${kind.some()})`)
          console.log(`> reading ${file.some()}`)
          // -------------------------------------------------------------
          // 👋 read the file
          // -------------------------------------------------------------
          let sourceCode = readFile({file}).cata(
            err => {
              console.log(err) // change of color
              process.exit(1)
            },
            value => {
              return value
            }
          )
          // -------------------------------------------------------------
          // 👋 publish the funktion
          // -------------------------------------------------------------
          async function update_funkt() {
            return axios({
              method: `PUT`,
              url:  `${url.some()}/funk/${kind.some()}`,
              headers: {
                "Content-Type": "application/json",
                "funk-token": token.some()
              },
              data: {
                name: name.some(),
                description: description.isNone() ? "no description" : description.some(),
                code: sourceCode // loaded file
              }
            })
          }

          update_funkt().then(response => {
            if(response.data.error) {
              console.log(`> 😡 ${response.data.error}`)
              process.exit(1)
            } else {
              console.log(`> 🙂 ${name.some()} function updated`)
              process.exit(0)
            }
            
          }).catch(err => {
            console.log(`> 😡 ${err}`)
            process.exit(1)
          })
        }
      )
    }, 
    source => { 
      console.log(`🚧 WIP source code as argument`)
      console.log(source)
    }
  )
}

module.exports = {
  update: update
};