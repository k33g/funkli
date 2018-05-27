const monet = require('monet')
const Validation = monet.Validation

function checkRunArgs({token, url, kind, name}) {
  let messages = [];
  if(token.isNone()) messages.push(`--token can't be null`)
  if(url.isNone()) messages.push(`--url can't be null`)
  if(kind.isNone()) messages.push(`--kind can't be null`)
  if(name.isNone()) messages.push(`--name can't be null`)

  return messages.length > 0
    ? Validation.Fail("😡 " + messages)
    : Validation.Success("🙂")
}

module.exports = {
  checkRunArgs: checkRunArgs
};