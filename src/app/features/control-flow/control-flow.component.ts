import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFlowService } from '../../services/control-flow.service';
import { ControlFlowExample } from '../../models/control-flow.model';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent implements OnInit {
  conditionals: ControlFlowExample[] = [];
  loops: ControlFlowExample[] = [];
  arrays: ControlFlowExample[] = [];
  methods: ControlFlowExample[] = [];
  strings: ControlFlowExample[] = [];
  comments: ControlFlowExample[] = [];

  showExamples: { [title: string]: boolean } = {};

  constructor(private controlFlowService: ControlFlowService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.controlFlowService.getConditionals().subscribe((res) => {
      this.conditionals = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });

    this.controlFlowService.getLoops().subscribe((res) => {
      this.loops = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });

    this.controlFlowService.getArrays().subscribe((res) => {
      this.arrays = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });

    this.controlFlowService.getMethods().subscribe((res) => {
      this.methods = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });

    this.controlFlowService.getStrings().subscribe((res) => {
      this.strings = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });

    this.controlFlowService.getComments().subscribe((res) => {
      this.comments = res;
      res.forEach((ex) => (this.showExamples[ex.title] = false));
    });
  }
}
