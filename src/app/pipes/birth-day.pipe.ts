import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDay'
})
export class BirthDayPipe implements PipeTransform {

  transform(value: any):number {
    if(!value){
      return value;
    }
    const today = new Date();
    const birthDate = new Date(value);
    console.log(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

}
