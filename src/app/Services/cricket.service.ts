import {Injectable} from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {Observable, of} from 'rxjs';
import {crickets} from '../Shared/mockCricket';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  private cricketList: Cricket[] = crickets;
  constructor() { }
  getCrickets(): Observable<Cricket[]> {
    return of(crickets);
  }

  addCricket(newCricket: Cricket): Observable<Cricket> {
    this.cricketList.push(newCricket);
    return of(this.cricketList)
  }

  updateCricket(updateCricket: Cricket): Observable<Cricket> {
    const index = this.cricketList.findIndex(foot => foot.playerName === updateCricket.playerName);
    if (index !== -1) {
      this.cricketList[index] = updateCricket;
    }
    return of(this.cricketList);
  }

  deleteCricket(deleteplayerName: string): Observable<Cricket[]> {
    this.cricketList = this.cricketList.filter(foot => foot.playerName !== deleteplayerName);
    return of(this.cricketList);
  }

  getfootball(readplayerName: string): Observable<Cricket | undefined> {
    const cricket = this.cricketList.find(foot => foot.playerName === readplayerName);
    return of(cricket);
  }
}
