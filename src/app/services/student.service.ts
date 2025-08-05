import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', enrolled: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', enrolled: false },
  ];
  private selectedStudent$ = new BehaviorSubject<Student | null>(null);

  getAll() {
    return this.students;
  }

  getById(id: number) {
    return this.students.find((s) => s.id === id);
  }

  add(student: Student) {
    this.students.push({ ...student, id: Date.now() });
  }

  update(id: number, student: Student) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.students[index] = { ...student, id };
    }
  }

  getSelectedStudent() {
    return this.selectedStudent$.asObservable();
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((s) => s.id === id);
  }

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
