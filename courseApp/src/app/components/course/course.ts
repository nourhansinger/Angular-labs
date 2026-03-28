import { Component } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
@Component({
  selector: 'app-course',
  imports: [FormsModule, NgStyle, AppDisableAfterClick, DiscountPipe , CurrencyPipe],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {

  selectedCat: number = 0;
  courses: ICourse[] = [
    {
      "id": 1,
      "title": "Introduction to Web Development",
      "description": "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
      "instructor": "John Doe",
      "price": 8000,
      "imageUrl": "web.jpg",
      "seats": 4,
      "categoryId": 1
    },
    {
      "id": 2,
      "title": "Data Science with Python",
      "description": "A comprehensive guide to data analysis, machine learning, and data visualization using Python.",
      "instructor": "Jane Smith",
      "price": 10000,
      "imageUrl": "data.jpg",
      "seats": 3,
      "categoryId": 2
    },
    {
      "id": 3,
      "title": "UI/UX Design Fundamentals",
      "description": "Master the principles of user interface and user experience design.",
      "instructor": "Alex Johnson",
      "price": 6000,
      "imageUrl": "ui.png",
      "seats": 4,
      "categoryId": 3
    },
    {
      "id": 4,
      "title": "Mobile App Development with React Native",
      "description": "Build cross-platform mobile applications using JavaScript and React.",
      "instructor": "Chris Lee",
      "price": 7000,
      "imageUrl": "react.webp",
      "seats": 3,
      "categoryId": 4
    }
  ]
  categories: ICategory[] = [
    {
      "id": 1,
      "name": "Web Development"
    },
    {
      "id": 2,
      "name": "Data Science"
    },
    {
      "id": 3,
      "name": "UI/UX Design"
    },
    {
      "id": 4,
      "name": "Mobile App Development"
    }
  ]

  register(course: ICourse) {
    if (course.seats > 0) {
      course.seats--;
    } else {
      alert(`Sorry, ${course.title} is full.`);
    }
  }

}
