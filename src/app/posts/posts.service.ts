import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts)
  }

  addPost(post: Post) {
    const newPost: Post = {
      title: post.title,
      content: post.content
    }

    this.posts.push(newPost);
  }
}
