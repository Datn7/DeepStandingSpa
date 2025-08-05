import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudent() {
    return {
      name: 'john doe',
      age: 22,
      enrolled: true,
      subjects: ['Math', 'Physics', 'Chemistry'],
      joinedOn: new Date(2023, 1, 15),
    };
  }
}
// This service provides student data, which can be used in components or other services.
// It includes a method to retrieve a sample student object with various properties.
