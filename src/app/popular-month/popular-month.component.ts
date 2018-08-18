import { Component, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-popular-month',
  templateUrl: './popular-month.component.html',
  styleUrls: ['./popular-month.component.css']
})
export class PopularMonthComponent {

@Input() monthList: Story[];

}
