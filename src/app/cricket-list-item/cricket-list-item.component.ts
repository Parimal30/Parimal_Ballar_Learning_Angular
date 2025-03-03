import { Component, Input } from '@angular/core';
import {Cricket} from '../Shared/Models/Cricket';

@Component({
  selector: 'app-cricket-list-item',
  imports: [],
  templateUrl: './cricket-list-item.component.html',
  standalone: true,
  styleUrl: './cricket-list-item.component.css'
})
export class CricketListItemComponent {
@Input() cricket?: Cricket;
}
