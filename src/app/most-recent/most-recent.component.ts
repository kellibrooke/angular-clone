import { Component, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.css']
})
export class MostRecentComponent {

@Input() latestList: Story[];

}
