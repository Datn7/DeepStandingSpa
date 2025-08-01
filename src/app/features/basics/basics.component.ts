import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BasicsService } from '../../services/basics.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basics',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss',
})
export class BasicsComponent {
  helloMsg = '';
  userInfo: any;
  evenOddResult: any;
  calcResult: any;
  books: Book[] = [];
  newBook: Book = { title: '', author: '', year: new Date().getFullYear() };

  constructor(private basicsService: BasicsService) {}

  ngOnInit() {
    this.getHello();
    this.getUserInfo();
    this.getBooks();
  }

  getHello() {
    this.basicsService.sayHello().subscribe((msg) => (this.helloMsg = msg));
  }

  getUserInfo() {
    this.basicsService
      .getUserInfo()
      .subscribe((data) => (this.userInfo = data));
  }

  checkEvenOdd(number: number) {
    this.basicsService
      .checkEvenOdd(number)
      .subscribe((data) => (this.evenOddResult = data));
  }

  calculate(a: number, b: number, op: string) {
    this.basicsService
      .calculate(a, b, op)
      .subscribe((data) => (this.calcResult = data));
  }

  getBooks() {
    this.basicsService.getBooks().subscribe((data) => (this.books = data));
  }

  addBook() {
    this.basicsService.addBook(this.newBook).subscribe(() => {
      this.getBooks();
      this.newBook = { title: '', author: '', year: new Date().getFullYear() };
    });
  }
}
