import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from '@angular/common';
import {CricketListComponent} from './cricket-list/cricket-list.component';
import {CricketListItemComponent} from './cricket-list-item/cricket-list-item.component';
import {CricketService} from './Services/cricket.service';
import {Cricket} from './Shared/Models/Cricket';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CricketListComponent, CricketListItemComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = `Assignment 4 Parimal-Ballar-Learning-Angular`;
  displayedColums: string[] = ['playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayerawards'];
  crickets: Cricket[] = [];

  constructor(private cricketService: CricketService ) {
  }
  ngOnInit() {
    this.cricketService.getCrickets().subscribe({
      next: (data: Cricket[]) => this.crickets = data,
      error: err => console.log("Error fetching cricket", err),
      complete:() => console.log("Crickets data fetch complete")
    })
  }
}
