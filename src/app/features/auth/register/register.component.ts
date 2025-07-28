import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  success = false;

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.username, this.email, this.password).subscribe({
      next: () => {
        this.success = true;
        this.router.navigate(['/login']);
      },
    });
  }
}
