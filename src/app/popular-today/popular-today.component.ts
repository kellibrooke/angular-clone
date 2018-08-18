import { Component, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-popular-today',
  templateUrl: './popular-today.component.html',
  styleUrls: ['./popular-today.component.css']
})
export class PopularTodayComponent{

  @Input() todayList: Story[];

}
