import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Theodosia',
    surName: 'Vardoulaki',
    age: 0x21,
    email: 'vtheodosia@gmail.com',
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: 'TBill',
    surName: 'Vardakis',
    age: 0x25,
    email: 'vbil@gmail.com',
    address: 'Volos, Greece'
  };

}
