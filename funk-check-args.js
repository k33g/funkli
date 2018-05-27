const monet = require('monet')
const Validation = monet.Validation

function checkArgs({token, url, kind, name, file}) {
  let messages = [];
  if(token.isNone()) messages.push(`--token can't be null`)
  if(url.isNone()) messages.push(`--url can't be null`)
  if(kind.isNone()) messages.push(`--kind can't be null`)
  if(name.isNone()) messages.push(`--name can't be null`)
  if(file.isNone()) messages.push(`--file can't be null`)

  return messages.length > 0
    ? Validation.Fail("😡 " + messages)
    : Validation.Success("🙂")
}

module.exports = {
  checkArgs: checkArgs
};