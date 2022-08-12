class GuessingGame {
  constructor() {
    this.guessedNumber = 0;
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessedNumber = Math.round((this.max + this.min) / 2);
    return this.guessedNumber;
  }

  lower() {
    this.max = this.guessedNumber;
  }

  greater() {
    this.min = this.guessedNumber;
  }
}

module.exports = GuessingGame;
