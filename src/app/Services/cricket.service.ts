import {Injectable} from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {Observable, of} from 'rxjs';
import {crickets} from '../Shared/mockCricket';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  constructor() { }
  getCrickets(): Observable<Cricket[]> {
    return of(crickets);
  }
}
