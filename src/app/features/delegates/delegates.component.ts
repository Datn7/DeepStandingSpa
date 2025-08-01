import { Component } from '@angular/core';
import { DelegatesService } from '../../services/delegates.service';

@Component({
  selector: 'app-delegates',
  imports: [],
  templateUrl: './delegates.component.html',
  styleUrl: './delegates.component.scss',
})
export class DelegatesComponent {
  actionResult = '';
  funcResult: any;
  predicateResult: any;
  delegateResult = '';
  eventResult: any;

  constructor(private delegatesService: DelegatesService) {}

  ngOnInit(): void {}

  runAll() {
    this.delegatesService
      .runAction()
      .subscribe((data) => (this.actionResult = data));
    this.delegatesService
      .runFunc()
      .subscribe((data) => (this.funcResult = data));
    this.delegatesService
      .runPredicate()
      .subscribe((data) => (this.predicateResult = data));
    this.delegatesService
      .runDelegate()
      .subscribe((data) => (this.delegateResult = data));
    this.delegatesService
      .runEvent()
      .subscribe((data) => (this.eventResult = data));
  }
}
