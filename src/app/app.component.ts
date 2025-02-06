import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cricket} from './Models/Cricket';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment 2 Parimal-Ballar-Learning-Angular';

  cricket1: Cricket = {playerName:"MS Dhoni", playerPosition:"Wicket keeper", playerJerseyNumber:7 ,playerAge:43 , isplayerawards:true };
  cricket2: Cricket = {playerName:"Virat Kohli", playerPosition:"Batsman", playerJerseyNumber:18 ,playerAge:36 , isplayerawards:true };
  cricket3: Cricket = {playerName:"Yuvraj Singh ", playerPosition:"Batsman", playerJerseyNumber:12 ,playerAge:43 , isplayerawards:false };
  cricket4: Cricket = {playerName:"Jasprit Bumrah", playerPosition:"Bowler", playerJerseyNumber:93 ,playerAge:31 , isplayerawards:true };
  cricket5: Cricket = {playerName:"Mohammed Siraj", playerPosition:"Bowler", playerJerseyNumber:73 ,playerAge:30 , isplayerawards:true};


  cricketlist: Cricket[] = [this.cricket1, this.cricket2, this.cricket3, this.cricket4, this.cricket5];
}
