import { Component, Input } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';
import {crickets} from '../Shared/mockCricket';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cricket-list-item',
  imports: [NgIf],
  templateUrl: './cricket-list-item.component.html',
  standalone: true,
  styleUrl: './cricket-list-item.component.css'
})
export class CricketListItemComponent {
@Input() crickets?: Cricket;
}
