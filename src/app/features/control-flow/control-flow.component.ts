import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFlowService } from '../../services/control-flow.service';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent implements OnInit {
  conditionals: string[] = [];
  loops: string[] = [];
  arrays: string[] = [];
  methods: string[] = [];
  strings: string[] = [];
  comments: string[] = [];

  showExample = '';

  // Example blocks
  conditionalsExample = `int age = 18;
if (age >= 18)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Minor");
}

switch (age)
{
    case 18:
        Console.WriteLine("Just turned adult");
        break;
    default:
        Console.WriteLine("Other age");
        break;
}`;

  loopsExample = `for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

int j = 0;
while (j < 5)
{
    Console.WriteLine(j);
    j++;
}

do
{
    Console.WriteLine(j);
    j++;
} while (j < 5);

foreach (var item in new[] { "a", "b", "c" })
{
    Console.WriteLine(item);
}`;

  arraysExample = `int[] nums = { 1, 2, 3 }; // Single-dimensional

int[,] matrix = new int[2, 2]; // Multi-dimensional

int[][] jagged = new int[2][]; // Jagged
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };`;

  methodsExample = `void Greet(string name)
{
    Console.WriteLine("Hello " + name);
}

int Add(int a, int b)
{
    return a + b;
}

void Update(ref int x)
{
    x += 10;
}

void TryGet(out int result)
{
    result = 42;
}

// Method Overloading
int Multiply(int x, int y) => x * y;
double Multiply(double x, double y) => x * y;`;

  stringsExample = `string firstName = "John";
string lastName = "Doe";

string fullName = firstName + " " + lastName;

string greeting = $"Hello, {fullName}!";

string formatted = string.Format("Age: {0}", 30);`;

  commentsExample = `// This is a single-line comment

/* 
  This is a 
  multi-line comment 
*/

// Best Practices:
// - Use meaningful variable names
// - Keep methods short and focused
// - Avoid magic numbers by using constants`;

  constructor(private controlFlowService: ControlFlowService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.controlFlowService
      .getConditionals()
      .subscribe((res) => (this.conditionals = res));
    this.controlFlowService.getLoops().subscribe((res) => (this.loops = res));
    this.controlFlowService.getArrays().subscribe((res) => (this.arrays = res));
    this.controlFlowService
      .getMethods()
      .subscribe((res) => (this.methods = res));
    this.controlFlowService
      .getStrings()
      .subscribe((res) => (this.strings = res));
    this.controlFlowService
      .getComments()
      .subscribe((res) => (this.comments = res));
  }
}
