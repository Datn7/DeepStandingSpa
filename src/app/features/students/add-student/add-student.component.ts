import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
})
export class AddStudentComponent {
  student: Student = { id: 0, name: '', email: '', enrolled: false };

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.studentService.add(this.student);
      this.router.navigate(['/students']);
    }
  }
}
