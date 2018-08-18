import {Pipe, PipeTransform} from '@angular/core';
import {Story} from './models/story.model';

@Pipe({
  name: "recent",
  pure: false
})
export class MostRecentPipe implements PipeTransform {
  transform(input: Story[]){
  var output: Story[] = [];
  for (var i = 0; i < input.length; i++) {
      if (input[i].category.includes("latest")) {
        output.push(input[i]);
      }
  }
  return output;
}

}
