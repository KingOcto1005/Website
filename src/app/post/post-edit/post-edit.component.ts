import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(
        null, 
        [
          Validators.required, 
          ]),
      description: new FormControl(
        null, 
        [
          Validators.required,
        ]),
      imagePath: new FormControl(
        null,
        [
          Validators.required,
        ]),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(
      title, 
      description, 
      imagePath, 
      'Payne', 
      new Date()
      );

      this.postService.addPost(post);
      
      this.router.navigate(["/post-list"]);
  }
}
