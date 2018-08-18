import { Component, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-popular-week',
  templateUrl: './popular-week.component.html',
  styleUrls: ['./popular-week.component.css']
})
export class PopularWeekComponent {

@Input() weekList: Story[];

}
