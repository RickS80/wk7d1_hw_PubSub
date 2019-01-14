const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const primeCheck = event.detail
    this.displayResult(primeCheck)
  })

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result')
  if (result === true) {
    resultElement.textContent = `Yes it's Prime Number`
  }
  else {resultElement.textContent = `Try another number`}

};



module.exports = ResultView;
