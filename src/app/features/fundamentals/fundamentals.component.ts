import { Component, OnInit } from '@angular/core';
import { FundamentalsService } from '../../services/fundamentals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.scss',
})
export class FundamentalsComponent implements OnInit {
  dataTypes: any;
  variables: any;
  operators: any;
  showExample = ''; // used to toggle examples

  // Example strings for each section
  dataTypesExample = `int age = 30;
float temp = 36.6f;
bool isActive = true;
string name = "Alice";`;

  variablesExample = `int x;           // Declaration
x = 5;           // Initialization
int y = 10;      // Declaration + Initialization`;

  operatorsExample = `int a = 5 + 2;       // Arithmetic
a += 3;            // Assignment
bool isEqual = a == 10;  // Comparison
bool check = a > 5 && a < 15;  // Logical
int b = a & 1;     // Bitwise`;

  constructor(private fundamentalsService: FundamentalsService) {}

  ngOnInit(): void {
    this.loadFundamentals();
  }

  loadFundamentals() {
    this.fundamentalsService.getDataTypes().subscribe((res) => {
      this.dataTypes = res;
    });

    this.fundamentalsService.getVariables().subscribe((res) => {
      this.variables = res;
    });

    this.fundamentalsService.getOperators().subscribe((res) => {
      this.operators = res;
    });
  }
}
