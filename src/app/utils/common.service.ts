import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommmonService {
  constructor() {}

  sortArray(jsonData: any) {
    const compareIds = (a: any, b: any) => {
      return a.id - b.id;
    };

    return jsonData.sort(compareIds);
  }

  getItemLocalStorage(item: string) {
    return localStorage.getItem(item);
  }

  setItemLocalStorage(key: string, item: string) {
    localStorage.setItem(key, item);
  }

  removeItemLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
