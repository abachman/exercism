export default class PhoneNumber {
  constructor(number) {
    this.original = number
  }

  sanitize(number) {
    return number.replace(/[^0-9]/g, '')
  }

  normalize(number) {
    // nothing to be done
    if (number.length === 10) {
      return number
    } else if (number.length === 11 && number[0] === '1') {
      return number.slice(1)
    } else if (number.length < 10) {
      return '0000000000'
    } else {
      return '0000000000'
    }
  }

  number() {
    return this.normalize(this.sanitize(this.original))
  }

  split() {
    const formatter = /(\d{3})(\d{3})(\d{4})/
    const matched = formatter.exec(this.number())
    return [matched[1], matched[2], matched[3]]
  }

  areaCode() {
    return this.split()[0]
  }

  toString() {
    const split = this.split()
    return `(${split[0]}) ${split[1]}-${split[2]}`
  }
}
