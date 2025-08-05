import { Component } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students-list',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  students: Student[];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getAll();
  }
}
