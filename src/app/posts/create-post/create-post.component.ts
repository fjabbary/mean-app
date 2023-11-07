import { Component } from '@angular/core';
import { Post } from 'src/app/post.model';
import { NgForm } from '@angular/forms'
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postReqMessage = '';

  constructor(private postService: PostsService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = form.value;

    this.postService.addPost(post).subscribe(data => {
      this.postReqMessage = data.message;
    })
    form.resetForm();
  }
}