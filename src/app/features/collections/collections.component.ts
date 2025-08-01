import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent implements OnInit {
  list: string[] = [];
  dictionary: { [key: string]: string } = {};
  queue: string[] = [];
  stack: string[] = [];
  hashset: string[] = [];
  objectKeys = Object.keys;

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit(): void {
    this.collectionsService.getList().subscribe((data) => (this.list = data));
    this.collectionsService
      .getDictionary()
      .subscribe((data) => (this.dictionary = data));
    this.collectionsService.getQueue().subscribe((data) => (this.queue = data));
    this.collectionsService.getStack().subscribe((data) => (this.stack = data));
    this.collectionsService
      .getHashSet()
      .subscribe((data) => (this.hashset = data));
  }
}
