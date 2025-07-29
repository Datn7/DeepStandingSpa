import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }
}
