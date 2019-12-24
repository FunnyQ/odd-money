import assignIn from 'lodash.assignin'
import isFunction from 'lodash.isfunction'
import isNaN from 'lodash.isnan'
import isPlainObject from 'lodash.isplainobject'
import isString from 'lodash.isstring'
import defaultCurrencies from './currency_iso'

let isInteger = function(n) {
  return Number(n) === n && n % 1 === 0
}

let testSameCurrency = function(left, right) {
  if (left.currency !== right.currency) throw new Error('not same currency')
}

let testInteger = n => {
  if (!isInteger(n)) throw new TypeError('not an integer')
}

let testMoneyInstance = function(other) {
  if (!(other instanceof Money)) throw new TypeError('not Money instance')
}

let testOperand = function(operand) {
  if (isNaN(parseFloat(operand)) && !isFinite(operand)) throw new TypeError('operand not a number')
}

export default class Money {
  constructor(cents, currency, currencies = defaultCurrencies) {
    if (isString(currency)) currency = currencies[currency]
    if (!isPlainObject(currency)) throw new TypeError('Invalid currency')

    testInteger(cents)

    this.cents = cents
    this.currency = currency.iso_code

    assignIn(this, currencies)

    Object.freeze(this)
  }

  get amount() {
    return this.cents / this.currencyData.subunit_to_unit
  }

  get currencyData() {
    return this[this.currency]
  }

  format(options = {}) {
    let result = this.amount.toLocaleString()

    if (options['withSymbol']) {
      result = this.currencyData.symbol_first
        ? `${this.currencyData.symbol}${result}`
        : `${result}${this.currencyData.symbol}`
    }

    return result
  }

  equals(other) {
    testMoneyInstance(other)

    return this.cents === other.cents && this.currency === other.currency
  }

  add(other) {
    testMoneyInstance(other)
    testSameCurrency(this, other)

    return new Money(this.cents + other.cents, this.currency)
  }

  substract(other) {
    testMoneyInstance(other)
    testSameCurrency(this, other)

    return new Money(this.cents - other.cents, this.currency)
  }

  multiply(multiplier, rounder = Math.round) {
    if (!isFunction(rounder)) throw new TypeError('rounder must be a function')
    testOperand(multiplier)

    const result = rounder(this.cents * multiplier)

    return new Money(result, this.currency)
  }

  divide(divisor, rounder = Math.round) {
    if (!isFunction(rounder)) throw new TypeError('rounder must be a function')
    testOperand(divisor)

    const result = rounder(this.cents / divisor)

    return new Money(result, this.currency)
  }

  allocate(ratios) {
    let remainCents = this.cents
    let results = []
    let total = ratios.reduce((total, ratio) => total + ratio)

    ratios.forEach(ratio => {
      let shareUnit = Math.floor(this.cents * (ratio / total))

      results.push(shareUnit)
      remainCents -= shareUnit
    })

    results.forEach((result, index) => {
      if (remainCents > 0) {
        results[index] += 1
        remainCents -= 1
      }
    })

    return results.map(result => new Money(result, this.currency))
  }

  isZero() {
    return this.cents === 0
  }

  isPositive() {
    return this.cents > 0
  }

  isNegative() {
    return this.cents < 0
  }
}