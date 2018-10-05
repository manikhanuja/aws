import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class PollyService {

  constructor() { }
  // getCharacters(): Observable<any[]> {
  //   return Observable.call(CHARACTERS).delay(100);
  // }
  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation'];
  }
}
