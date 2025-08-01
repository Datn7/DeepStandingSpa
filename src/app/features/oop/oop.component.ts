import { Component } from '@angular/core';
import { OopService } from '../../services/oop.service';
import { ShapeInfo } from '../../models/shapeInfo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oop',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './oop.component.html',
  styleUrl: './oop.component.scss',
})
export class OopComponent {
  shapes: ShapeInfo[] = [];

  constructor(private oopService: OopService) {}

  ngOnInit(): void {
    this.oopService.getShapes().subscribe((data) => (this.shapes = data));
  }
}
