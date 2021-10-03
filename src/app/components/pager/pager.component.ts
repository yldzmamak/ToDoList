import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  inputs: ['itemCount', 'pageSize', 'pageIndex'],
  outputs: ['pageIndexChange'],
})
export class PagerComponent {
  constructor() {
    this.pageSize = 1;
    this.updatePageCount();
  }

  _itemCount: number;
  get itemCount() {
    return this._itemCount;
  }
  set itemCount(value) {
    this._itemCount = value;
    this.updatePageCount();
  }

  _pageSize: number;
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = value;
    this.updatePageCount();
  }

  _pageCount: number;
  updatePageCount() {
    this._pageCount = Math.ceil(this.itemCount / this.pageSize);
  }

  pageIndexChange = new EventEmitter();
  _pageIndex: number;
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = value;
    this.pageIndexChange.emit(this.pageIndex);
  }

  get canMoveToNextPage(): boolean {
    return this.pageIndex < this._pageCount - 1 ? true : false;
  }

  get canMoveToPreviousPage(): boolean {
    return this.pageIndex >= 1 ? true : false;
  }

  moveToNextPage() {
    if (this.canMoveToNextPage) {
      this.pageIndex++;
    }
  }

  moveToPreviousPage() {
    if (this.canMoveToPreviousPage) {
      this.pageIndex--;
    }
  }

  moveToLastPage() {
    this.pageIndex = this._pageCount - 1;
  }

  moveToFirstPage() {
    this.pageIndex = 0;
  }
}
