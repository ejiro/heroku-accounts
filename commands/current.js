'use strict'

const cli = require('heroku-cli-util')
const co = require('co')
const accounts = require('../lib/accounts')

function * run (context, heroku) {
  var account = accounts.current()
  if (account) {
    cli.log(`${account}`)
  }
}

module.exports = {
  topic: 'accounts',
  command: 'current',
  run: cli.command(co.wrap(run))
}
