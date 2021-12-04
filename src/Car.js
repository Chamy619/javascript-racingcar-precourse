import { NUMBER_RANGE, RACE_CHARACTER } from './constants.js';
import randomNumberInRange from './utils/randomNumberInRange.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  race() {
    const randomNumber = randomNumberInRange(NUMBER_RANGE.min, NUMBER_RANGE.max);
    if (randomNumber > NUMBER_RANGE.boundary) {
      this.distance++;
    }
  }

  raceString() {
    let race = '';
    for (let i = 0; i < this.distance; i++) {
      race += RACE_CHARACTER;
    }

    return `${this.name}: ${race}`;
  }
}
