import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/get-users.service';
// import { MessageService } from './message.service';

const arr = {
  name : 'John',
  age: 12
};

const map = new Map();
map.set(1, 'John');
map.set('age', 22);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: any = [];
  sortedPosts = [];
  pagesToShow = 0;

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  constructor(
      private getUsers: GetUsersService
    ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getMessages();
    this.pagesToShow = this.posts.length / this.limit;
    this.sortedPosts = this.posts.slice(0, this.limit);
    // console.log(typeof Object.keys(arr)[0]);
    const iter = map.keys();
    const arrKeys = Array.from(iter);
    arrKeys.forEach((key) => {
      console.log(typeof key);
    });
  }

  async getMessages(): Promise<void> {
    this.loading = true;
    this.posts = await this.getUsers.getData();
    this.total = this.posts.length;
    this.loading = false;
  }

  onNext(): void {
    this.page++;
    this.sortedPosts = this.posts.slice(this.limit * (this.page - 1), this.limit * this.page);

    console.log('++');
  }

  onPrev(): void {
    this.page--;
    this.sortedPosts = this.posts.slice(this.limit * (this.page - 1) , this.limit * this.page);
    console.log('--');
  }
}
