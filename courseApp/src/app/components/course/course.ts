import { Component } from '@angular/core';
import { ICourse } from '../../models/icourse';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  courses : ICourse[] = [
  {
    "id": 1,
    "title": "Introduction to Web Development",
    "description": "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    "instructor": "John Doe",
    "price": 49.99,
    "imageUrl": "web.jpg",
    "seats": 20,
    "rating": 4.5
  },
  {
    "id": 2,
    "title": "Data Science with Python",
    "description": "A comprehensive guide to data analysis, machine learning, and data visualization using Python.",
    "instructor": "Jane Smith",
    "price": 99.99,
    "imageUrl": "data.jpg",
    "seats": 15,
    "rating": 4.8
  },
  {
    "id": 3,
    "title": "UI/UX Design Fundamentals",
    "description": "Master the principles of user interface and user experience design.",
    "instructor": "Alex Johnson",
    "price": 29.99,
    "imageUrl": "ui.png",
    "seats": 25,
    "rating": 4.2
  },
  {
    "id": 4,
    "title": "Mobile App Development with React Native",
    "description": "Build cross-platform mobile applications using JavaScript and React.",
    "instructor": "Chris Lee",
    "price": 79.99,
    "imageUrl": "react.webp",
    "seats": 10,
    "rating": 4.6
  }
]  

register(course: ICourse) {
  if (course.seats > 0) {
    course.seats--;
    alert(`You have registered for ${course.title}`);
  } else {
    alert(`Sorry, ${course.title} is full.`);
  }   
}

}
