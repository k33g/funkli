const fs = require('fs')
const monet = require('monet')
const Validation = monet.Validation

function readFile({file}) {
  try {
    //let data = fs.readFileSync(`${__dirname}/${file.some()}`, 'utf8');
    let data = fs.readFileSync(`${file.some()}`, 'utf8');
    return Validation.Success(data)
  } catch (error) {
    return Validation.Fail(error)
  }
}


module.exports = {
  readFile: readFile
};