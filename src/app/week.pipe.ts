import {Pipe, PipeTransform} from '@angular/core';
import {Story} from './models/story.model';

@Pipe({
  name: "week",
  pure: false
})
export class WeekPipe implements PipeTransform {
  transform(input: Story[]){
  var output: Story[] = [];
  for (var i = 0; i < input.length; i++) {
      if (input[i].category.includes("week")) {
        output.push(input[i]);
      }
  }
  return output;
}

}
