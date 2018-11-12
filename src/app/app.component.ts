import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.{{tenantCode}}.component.css']
})
export class AppComponent {
  title = 'jad';
  tenantCode = 'abc';

}
