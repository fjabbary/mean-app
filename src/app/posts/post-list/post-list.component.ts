import { Component } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[];
  private postSubscription: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postService.getPosts().subscribe(postData => {
      this.posts = postData.data;
    })
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
