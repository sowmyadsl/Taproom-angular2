import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "lowPints",
  pure: false
})


export class LowPintsPipe implements PipeTransform {

  transform(input: Keg[], desiredFilter) {
    var output: Keg[] = [];
    if(desiredFilter === 'lowPints') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining < 11) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "manyPints") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining > 11) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
