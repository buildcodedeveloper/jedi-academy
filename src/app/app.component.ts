import { Component } from '@angular/core';
import { Student } from './student/Student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad';
  tenantCode = 'abc';
  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han Solo', isJedi: false }
  ]
}
