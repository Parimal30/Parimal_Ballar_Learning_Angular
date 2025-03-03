import { Component } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {CricketListItemComponent} from '../cricket-list-item/cricket-list-item.component';

@Component({
  selector: 'app-cricket-list',
  imports: [CricketListItemComponent],
  templateUrl: './cricket-list.component.html',
  standalone: true,
  styleUrl: './cricket-list.component.css'
})
export class CricketListComponent {
  cricket1: Cricket = {playerName: "Virat Kohli", playerPosition: "Batsman", playerAge: "35", isplayerawards: true};
  cricket2: Cricket = {playerName: "Rohit Sharma", playerPosition: "Batsman", playerAge: "36", isplayerawards: true};
  cricket3: Cricket = {playerName: "Jasprit Bumrah", playerPosition: "Bowler", playerAge: "30", isplayerawards: true};
  cricket4: Cricket = {playerName: "Ravindra Jadeja", playerPosition: "All-Rounder", playerAge: "35", isplayerawards: true};
  cricket5: Cricket = {playerName: "KL Rahul", playerPosition: "Wicketkeeper-Batsman", playerAge: "32", isplayerawards: true};
  cricket6: Cricket = {playerName: "Shubman Gill", playerPosition: "Batsman", playerAge: "24", isplayerawards: true};

  cricketlist: Cricket[] = [this.cricket1, this.cricket2, this.cricket3, this.cricket4, this.cricket5, this.cricket6];

}
