import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Theodosia';

  person= {
    givenName: 'Theodosia',
    surName: 'Vardoulaki',
    age: 0x21,
    email: 'vtheodosia@gmail.com'
  }
}
