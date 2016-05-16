export default class Gigasecond {
  constructor(date) {
    this.given = date
  }

  date() {
    // calculate Gigasecond past given date
    const givenEpochMillis = this.given.getTime()
    return new Date(givenEpochMillis + (Math.pow(10, 9) * 1000))
  }
}
