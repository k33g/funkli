const axios = require('axios')
const monet = require('monet')
const Validation = monet.Validation
const checkRunArgs = require('./funk-check-run-args').checkRunArgs
const readFile = require('./funk-read').readFile

function run({token, name, kind, url, parameters}) {

  //console.log(`> checking arguments ...`)
      
  checkRunArgs({token, url, kind, name}).cata(
    err => { // Bad Cli Arguments
      console.log(err) // change of color
      process.exit(1)
    }, 
    value => { 
      //console.log(`> calling ${name.some()} function (${kind.some()})`)

      // -------------------------------------------------------------
      // 👋 run the funktion
      // -------------------------------------------------------------
      async function run_funkt() {
        return axios({
          method: `POST`,
          url:  `${url.some()}/funk/${kind.some()}/run`,
          headers: {
            "Content-Type": "application/json",
            "funk-token": token.some()
          },
          data: {
            name: name.some() ,
            parameters: parameters.isNone() ? null : JSON.parse(parameters.some())
          }
        })
      }

      run_funkt().then(response => {
        if(response.data.error) {
          console.log(`> 😡 ${response.data.error}`)
          process.exit(1)
        } else {
          console.log(response.data)
          process.exit(0)
        }
        
      }).catch(err => {
        console.log(`> 😡 ${err}`)
        process.exit(1)
      })
    }
  )
}

module.exports = {
  run: run
};