import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent {
  student: any;
  newSubject: string = '';
  showSubjects: boolean = true;

  constructor(private studentService: StudentService) {
    this.student = this.studentService.getStudent();
  }

  toggleSubjects() {
    this.showSubjects = !this.showSubjects;
  }

  addSubject() {
    if (this.newSubject.trim()) {
      this.student.subjects.push(this.newSubject.trim());
      this.newSubject = '';
    }
  }
}
