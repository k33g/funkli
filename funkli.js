const axios = require('axios')
const argv = require('yargs').argv
const monet = require('monet')

const Maybe = monet.Maybe
const Validation = monet.Validation

// -------------------------------------------------------------
const create = require('./funk-create').create
const update = require('./funk-update').update
const run = require('./funk-run').run
// -------------------------------------------------------------

const action = Maybe.fromNull(argv.action)

const token = Maybe.fromNull(argv.token)
const url = Maybe.fromNull(argv.url)
const kind = Maybe.fromNull(argv.kind)
const name = Maybe.fromNull(argv.name)
const description = Maybe.fromNull(argv.description)
const file = Maybe.fromNull(argv.file)

const doc = Maybe.fromNull(argv.doc)
const code = Maybe.fromNull(argv.code)

const parameters = Maybe.fromNull(argv.parameters)


function remove() {
  // 🚧 WIP
} 

// node funkli.js --action create --token panda --url http://localhost:8080 --kind js --name oula
function call(action) {
  action.cata(() => {
    console.log("--action can't be null")
    process.exit(1)
  }, cmd => {
    switch(cmd) {
      case "create":
        create({token, name, description, kind, url, code, file})
        break;
      case "update":
        update({token, name, description, kind, url, code, file})
        break;
      case "remove":
        remove()
        break;
      case "run": // node funkli.js --action run
        run({token, name, kind, url, parameters})
        break;
      default:
        console.log("--action unknown")
        process.exit(1)
    }
  });
}

doc.cata(
  () => {
    call(action)
  }, 
  value => {
    console.log(`help: 🚧 WIP`)
  }
)
