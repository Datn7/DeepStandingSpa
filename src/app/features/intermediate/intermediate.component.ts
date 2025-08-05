import { Component, OnInit } from '@angular/core';
import { IntermediateService } from '../../services/intermediate.service';
import { CommonModule } from '@angular/common';
import { IntermediateExample } from '../../models/intermediate.model';

@Component({
  selector: 'app-intermediate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate.component.html',
  styleUrl: './intermediate.component.scss',
})
export class IntermediateComponent implements OnInit {
  topics: { [key: string]: IntermediateExample[] } = {};
  showExamples: { [title: string]: boolean } = {};

  constructor(private intermediateService: IntermediateService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll() {
    const loads = [
      {
        key: 'Exception Handling',
        method: this.intermediateService.getExceptions(),
      },
      { key: 'Generics', method: this.intermediateService.getGenerics() },
      { key: 'Collections', method: this.intermediateService.getCollections() },
      { key: 'Delegates', method: this.intermediateService.getDelegates() },
      { key: 'Events', method: this.intermediateService.getEvents() },
      { key: 'LINQ', method: this.intermediateService.getLinq() },
      { key: 'File I/O', method: this.intermediateService.getFileIO() },
      {
        key: 'Asynchronous Programming',
        method: this.intermediateService.getAsync(),
      },
    ];

    loads.forEach((item) => {
      item.method.subscribe((res) => {
        this.topics[item.key] = res;
        res.forEach((ex) => (this.showExamples[ex.title] = false));
      });
    });
  }
}
