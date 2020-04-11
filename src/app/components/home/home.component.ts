import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  posts: Post[];

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

}
