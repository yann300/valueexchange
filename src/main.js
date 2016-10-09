var accounts = require('./util/accounts')
var transactions = require('./util/transactions')
var Blocks = require('./blocks')
var accountsHelpers = require('./util/accounts')
var FunctionGraph = require('function-graph')

var blockTimer = new Blocks()
var accountPool = accounts.retrieveAllAccounts()
accounts.refillAccounts(blockTimer, accountPool)

var accountsBalance = {}
function trackAccountsBalance () {
  var balances = accountsHelpers.listBalance(accountPool, blockTimer)
  for (var k in balances) {
    if (!accountsBalance[k]) {
      accountsBalance[k] = []
    }
    accountsBalance[k].push(balances[k])
  }
}


// transactions.executeBlankStory(blockTimer, 20, trackAccountsBalance)
transactions.executeStory(blockTimer, accountPool, trackAccountsBalance)

for (var k in accountsBalance) {
  graph(k, accountsBalance[k])
}

function graph (account, points) {
  var height = 30
  var graph = new FunctionGraph({
    height: height * 2,
    width: 160,
    marks: {
      hAxis: '─',
      vAxis: '│',
      center: '┼',
      point: '•'
    }
  })

  for (var i = 0; i < points.length; i++) {
    // console.log(i + ' ' + points[i] / height)
    graph.addPoint(i, points[i] / height)
  }

  console.log('\n')
  console.log(account + ':')
  console.log(graph.toString())
  console.log('\n')
  console.log('\n')
}
