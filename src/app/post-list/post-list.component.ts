import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public postList: Observable<Post[]>;
  public errors: string[];
  public constructor(
    private postsService: PostsService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.postList = this.postsService.getPosts();
    this.titleService.setTitle('Posts | Angular Spectator Testing');
  }
}
