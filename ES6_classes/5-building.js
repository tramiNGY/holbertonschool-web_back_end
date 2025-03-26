export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newsqft) {
    if (typeof newsqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newsqft;
  }

  evacuationWarningMessage() {
    throw new TypeError('Class extending Building must override evacuationWarningMessage');
  }
}
