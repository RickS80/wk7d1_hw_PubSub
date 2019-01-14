const PubSub = require('../helpers/pub_sub.js')

const PrimeNumber = function() {
};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const primeNumberCheck = this.primeCheck(inputtedNumber);
  PubSub.publish('PrimeNumber:result-calculated', primeNumberCheck)
  })
};

PrimeNumber.prototype.primeCheck = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};
  


module.exports = PrimeNumber;
