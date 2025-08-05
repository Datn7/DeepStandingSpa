import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OopService } from '../../services/oop.service';
import { OopExample } from '../../models/oop.model';

@Component({
  selector: 'app-oop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oop.component.html',
  styleUrl: './oop.component.scss',
})
export class OopComponent implements OnInit {
  categories: { [key: string]: OopExample[] } = {};
  showExamples: { [title: string]: boolean } = {};

  constructor(private oopService: OopService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll() {
    const loaders = [
      { key: 'Classes & Objects', method: this.oopService.getClasses() },
      { key: 'Encapsulation', method: this.oopService.getEncapsulation() },
      { key: 'Inheritance', method: this.oopService.getInheritance() },
      { key: 'Polymorphism', method: this.oopService.getPolymorphism() },
      { key: 'Abstraction', method: this.oopService.getAbstraction() },
      { key: 'Interfaces', method: this.oopService.getInterfaces() },
      { key: 'Enums', method: this.oopService.getEnums() },
      { key: 'Structs', method: this.oopService.getStructs() },
      { key: 'Static Members', method: this.oopService.getStatic() },
    ];

    loaders.forEach((loader) =>
      loader.method.subscribe((res) => {
        this.categories[loader.key] = res;
        res.forEach((ex) => (this.showExamples[ex.title] = false));
      })
    );
  }
}
