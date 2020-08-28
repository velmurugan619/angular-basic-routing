import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData() {
    let newData = [
      {
          'id': 1,
          'name': 'John'
      },
      {
          'id': 2,
          'name': 'Hendry'
      }
    ];

    return newData;
  }
}
