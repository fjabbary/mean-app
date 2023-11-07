import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<{ message: string, data: Post[] }>('http://localhost:8000/api/posts')
  }

  addPost(post: Post) {
    const newPost: Post = {
      id: 'asdas',
      title: post.title,
      content: post.content
    }

    return this.http.post<{ message: string }>('http://localhost:8000/api/posts', newPost, httpOptions)
  }
}
