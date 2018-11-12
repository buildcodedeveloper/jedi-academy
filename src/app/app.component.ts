import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad';
  tenantCode = 'abc';

  luke = { name: 'Luke', isJedi: true, temple: 'Coruscant' }
  leia = { name: 'Leia', isJedi: false }
  han = { name: 'Han Solo', isJedi: false }

}
