import assignIn from 'lodash.assignin'
import isFunction from 'lodash.isfunction'
import isNaN from 'lodash.isnan'
import isPlainObject from 'lodash.isplainobject'
import isString from 'lodash.isstring'
import round from 'lodash.round'
import defaultCurrencies from './currency_iso'
import numberPrecision from 'number-precision'

const isInteger = function (n) {
  return Number(n) === n && n % 1 === 0
}

const testSameCurrency = function (left, right) {
  if (left.currency !== right.currency) throw new Error('not same currency')
}

const testInteger = (n) => {
  if (!isInteger(n)) throw new TypeError('not an integer')
}

const testMoneyInstance = function (other) {
  if (!(other instanceof Money)) throw new TypeError('not Money instance')
}

const testOperand = function (operand) {
  if (isNaN(parseFloat(operand)) && !isFinite(operand)) throw new TypeError('operand not a number')
}

const fetchCurrencyData = (customCurrencies, targetCurrency) => {
  if (customCurrencies) return customCurrencies[targetCurrency] || defaultCurrencies[targetCurrency]

  return defaultCurrencies[targetCurrency]
}

class Money {
  constructor(cents, currency, customCurrencies = undefined) {
    if (isString(currency)) currency = fetchCurrencyData(customCurrencies, currency)
    if (!isPlainObject(currency)) throw new TypeError('Invalid currency')

    this.cents = numberPrecision.strip(cents)

    testInteger(this.cents)

    this.currency = currency.iso_code
    this.customCurrencies = customCurrencies

    Object.freeze(this)
  }

  static fromAmount(amount, currency, customCurrencies = undefined) {
    if (isString(currency)) currency = fetchCurrencyData(customCurrencies, currency)
    if (!isPlainObject(currency)) throw new TypeError('Invalid currency')

    testInteger(amount)

    return new this(amount * currency.subunit_to_unit, currency.iso_code, customCurrencies)
  }

  get amount() {
    return this.cents / this.currencyData.subunit_to_unit
  }

  get currencyData() {
    return fetchCurrencyData(this.customCurrencies, this.currency)
  }

  get roundPrecision() {
    const precisionString = String(this.currencyData.smallest_denomination / this.currencyData.subunit_to_unit).split(
      '.'
    )[1]

    return precisionString ? precisionString.length : 0
  }

  format(options = { withSymbol: null, zeroSymbol: null }) {
    if (this.isZero() && options['zeroSymbol']) return options['zeroSymbol']
    if (!options['withSymbol']) return this.amount.toLocaleString()

    return this.currencyData.symbol_first
      ? `${this.currencyData.symbol}${this.amount.toLocaleString()}`
      : `${this.amount.toLocaleString()}${this.currencyData.symbol}`
  }

  equals(other) {
    testMoneyInstance(other)

    return this.cents === other.cents && this.currency === other.currency
  }

  add(other) {
    testMoneyInstance(other)
    testSameCurrency(this, other)

    return new Money(this.cents + other.cents, this.currency, this.customCurrencies)
  }

  substract(other) {
    testMoneyInstance(other)
    testSameCurrency(this, other)

    return new Money(this.cents - other.cents, this.currency, this.customCurrencies)
  }

  multiply(multiplier, rounder = round) {
    if (!isFunction(rounder)) throw new TypeError('rounder must be a function')
    testOperand(multiplier)

    const result = rounder(this.amount * multiplier, this.roundPrecision) * this.currencyData.subunit_to_unit

    return new Money(result, this.currency, this.customCurrencies)
  }

  divide(divisor, rounder = round) {
    if (!isFunction(rounder)) throw new TypeError('rounder must be a function')
    testOperand(divisor)

    const result = rounder(this.amount / divisor, this.roundPrecision) * this.currencyData.subunit_to_unit

    return new Money(result, this.currency, this.customCurrencies)
  }

  allocate(ratios) {
    let remainCents = this.cents
    let results = []
    let total = ratios.reduce((total, ratio) => total + ratio)

    ratios.forEach((ratio) => {
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

    return results.map((result) => new Money(result, this.currency))
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

export default assignIn(Money, defaultCurrencies)
