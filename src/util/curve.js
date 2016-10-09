module.exports = {
  A1: 20, // block time to 0
  A2: 0.25, // decreasing coeff
  currentBalanceState: function (refillBlock, blocks) {
    var ret = blocks.block - refillBlock
    ret = (ret - this.A1) * this.A2
    ret = Math.exp(ret)
    ret = 1 - ret
    return ret < 0 ? 0 : ret
  }
}
