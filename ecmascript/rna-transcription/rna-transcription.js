export default class Transcriptor {
  toRna(inStrand) {
    return inStrand
      .split('')
      .map((c) => { return {'G':'C','C':'G','T':'A','A':'U'}[c] })
      .join('')
  }
}
