import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Theodosia';

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
