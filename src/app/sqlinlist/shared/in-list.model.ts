import { InListUtil } from './in-list-util.utilities';

export class InList {

  private _input: string;
  private _inputArray: Array<string>;

  constructor(input: string) {
    this.input = input;
    this.inputArray = InListUtil.inputToArrayConverter(input);
  }

  get input(): string {
    return this._input;
  }

  set input(value: string) {
    this._input = value;
  }

  get inputArray(): Array<string> {
    return this._inputArray;
  }

  set inputArray(value: Array<string>) {
    console.log(JSON.stringify(value, null, '  '));
    this._inputArray = value;
  }

}
