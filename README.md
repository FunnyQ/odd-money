# odd Money

handling money data type from our own backend.

## Usage

```js
import Money from 'odd-money'

const itemTotal = new Money(order.item_total, 'TWD') // 1200
const shipmentTotal = new Money(order.shipment_total, 'TWD') // 100

orderTotal.format() // 1,200
orderTotal.format({ withSymbol: true }) // $ 1,200
orderTotal.cents // 120000
orderTotal.amount // 1200
orderTotal.add(shipmentTotal).format() // 1,300
orderTotal.isZero() // false
orderTotal.isPositive() // true
orderTotal.isNegative() // false
```
