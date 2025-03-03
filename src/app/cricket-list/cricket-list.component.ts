import { Component } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {CricketListItemComponent} from '../cricket-list-item/cricket-list-item.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-cricket-list',
  imports: [NgForOf, CricketListItemComponent, NgClass],
  templateUrl: './cricket-list.component.html',
  standalone: true,
  styleUrl: './cricket-list.component.css'
})
export class CricketListComponent {
  cricket1: Cricket = {playerName: "Virat Kohli", playerJerseyNumber:18, playerPosition: "Batsman", playerAge: 35, isplayerawards: true, bgClass: "pink-bg"};
  cricket2: Cricket = {playerName: "Rohit Sharma", playerPosition: "Batsman", playerJerseyNumber: 45,playerAge: 36, isplayerawards: true, bgClass: "teal-bg"};
  cricket3: Cricket = {playerName: "Jasprit Bumrah", playerJerseyNumber: 93, playerPosition: "Bowler", playerAge: 30, isplayerawards: true, bgClass: "pink-bg"};
  cricket4: Cricket = {playerName: "Ravindra Jadeja", playerJerseyNumber: 8, playerPosition: "All-Rounder", playerAge: 35, isplayerawards: true, bgClass: "teal-bg"};
  cricket5: Cricket = {playerName: "KL Rahul", playerJerseyNumber: 1, playerPosition: "Wicketkeeper-Batsman", playerAge: 32, isplayerawards: true, bgClass: "pink-bg"};
  cricket6: Cricket = {playerName: "Shubman Gill", playerJerseyNumber: 77, playerPosition: "Batsman", playerAge: 24, isplayerawards: true, bgClass: "teal-bg"};

  cricketlist: Cricket[] = [this.cricket1, this.cricket2, this.cricket3, this.cricket4, this.cricket5, this.cricket6];

}
