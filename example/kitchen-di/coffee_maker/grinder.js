import {Inject} from 'di/annotations';
import {Electricity} from '../electricity';

@Inject(Electricity)
export class Grinder {
  constructor(electricity) {
    this.electricity = electricity;
  }

  grind() {
    console.log('Grinding coffee beans...');
  }
}
