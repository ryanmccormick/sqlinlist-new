import { Component, OnInit } from '@angular/core';
import { IN_LIST_TYPE } from './shared/in-list-type.constants';
import { InList } from './shared/in-list.model';

@Component({
  selector: 'app-sqlinlist',
  templateUrl: './sqlinlist.component.html',
  styleUrls: ['./sqlinlist.component.scss']
})
export class SqlinlistComponent implements OnInit {

  title: string;
  inList: InList;
  inListInput: string;

  private _inListType: any;

  constructor() {
    this.title = 'Make SQL IN-LIST';
    this.inListType = IN_LIST_TYPE.numeric;
  }

  ngOnInit() {
  }

  get inListType(): any {
    return this._inListType;
  }

  set inListType(value: any) {
    this._inListType = value;
  }

  get isReady(): boolean {
    return !!this.inList;
  }

  get makeNewInListButtonDisabled(): boolean {
    return !!this.inListInput === false;
  }

  makeNewInlist(value: string) {
    this.inList = new InList(value);
  }

  resetInList() {
    this.inList = null;
    this.inListInput = null;
  }



}
