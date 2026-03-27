import { Component } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  newStudents : Person[] = [{
    id : 201,
    name : 'Nourhan Singer',
    age : 23,
    photoUrl : 'test.jpg' 
  },
  {id : 202,
    name : 'Lila Ahmed',
    age : 25,
    photoUrl : 'test.jpg' 
  }]


}
