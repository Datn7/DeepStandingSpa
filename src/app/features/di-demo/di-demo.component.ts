import { Component, OnInit } from '@angular/core';
import { DiResult } from '../../models/di-result.model';
import { DiTestService } from '../../services/di-test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-demo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './di-demo.component.html',
  styleUrl: './di-demo.component.scss',
})
export class DiDemoComponent implements OnInit {
  result?: DiResult;

  constructor(private diService: DiTestService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.diService.getDiValues().subscribe((res) => (this.result = res));
  }
}
