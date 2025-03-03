import { Component } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {CricketListItemComponent} from '../cricket-list-item/cricket-list-item.component';
import {NgClass, NgForOf} from '@angular/common';
import {CricketService} from '../Services/cricket.service';

@Component({
  selector: 'app-cricket-list',
  imports: [NgForOf, CricketListItemComponent, NgClass],
  templateUrl: './cricket-list.component.html',
  standalone: true,
  styleUrl: './cricket-list.component.css'
})
export class CricketListComponent {

  crickets: Cricket[] = [];

  constructor(private cricketService: CricketService) {
  }
}
