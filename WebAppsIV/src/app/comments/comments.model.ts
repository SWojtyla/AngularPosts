export class Comments {
  constructor(
    private _text: string,
    private _dateAdded = new Date()
  ) {}

  static fromJSON(json: any): Comments {
    const ing = new Comments(json.text, json.dateAdded);
    return ing;
  }

  get text() {
    return this._text;
  }
  get dateAdded() {
    return this._dateAdded;
  }
  toJSON(): any {
    return {
      text: this.text,
    };
  }
}
