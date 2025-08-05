import { Component } from '@angular/core';
import { AdvancedService } from '../../services/advanced.service';
import { AdvancedModel } from '../../models/advanced.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advanced',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss',
})
export class AdvancedComponent {
  topics: string[] = [
    'hello',
    'datatype',
    'class',
    'inheritance',
    'exception',
    'delegate',
    'linq',
    'extension',
    'record',
    'reflection',
    'parallel',
    'singleton',
  ];

  selectedTopic = '';
  example: AdvancedModel | null = null;
  errorMessage = '';

  constructor(private advancedService: AdvancedService) {}

  fetchExample(): void {
    if (!this.selectedTopic) return;

    this.advancedService.getExample(this.selectedTopic).subscribe({
      next: (data) => {
        this.example = data;
        this.errorMessage = '';
      },
      error: () => {
        this.example = null;
        this.errorMessage = 'Topic not found.';
      },
    });
  }
}
