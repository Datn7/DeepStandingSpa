import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss',
})
export class EditStudentComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const student = this.studentService.getById(this.id);
    if (student) {
      this.form = new FormGroup({
        name: new FormControl(student.name, Validators.required),
        email: new FormControl(student.email, [
          Validators.required,
          Validators.email,
        ]),
        enrolled: new FormControl(student.enrolled),
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.studentService.update(this.id, this.form.value);
      this.router.navigate(['/students']);
    }
  }
}
