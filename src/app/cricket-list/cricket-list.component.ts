import { Component, OnInit } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {CricketListItemComponent} from '../cricket-list-item/cricket-list-item.component';
import {NgForOf} from '@angular/common';
import {CricketService} from '../Services/cricket.service';

@Component({
  selector: 'app-cricket-list',
  imports: [NgForOf, CricketListItemComponent],
  templateUrl: './cricket-list.component.html',
  standalone: true,
  styleUrl: './cricket-list.component.css'
})
export class CricketListComponent implements OnInit {
  displayedColumns: String[] = ['playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayerawards'];

  crickets: Cricket[] = [];

  constructor(private cricketService: CricketService) {
  }
  ngOnInit() {
    this.cricketService.getCrickets().subscribe({
      next: (data: Cricket[]) => this.crickets = data,
      error: err => console.log("Error fetching crickets", err),
      complete: () => console.log("Cricket data fetch complete")
    })

  }
  selectedCricket: Cricket;
  selectCricket(cricket: Cricket):void {
    this.selectedCricket = cricket;
  }
}
