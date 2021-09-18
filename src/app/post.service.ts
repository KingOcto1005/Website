import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {
    listOfPosts: Post[] = [
        new Post(
          "Earth", 
          "Look at beautiful nature!", 
          "https://static.onecms.io/wp-content/uploads/sites/20/2020/09/11/nature.jpg", 
          "Tester", 
          new Date()
          ),
          new Post(
            "Fire", 
            "Look at fire burn!", 
            "https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2021/9/7/fire.jpg", 
            "Tester2", 
            new Date()
            ),
            new Post(
              "Water", 
              "Waves in the ocean!", 
              "https://songsforteaching.com/images/categorypics/ocean.jpg", 
              "Tester3", 
              new Date()
              ),
    
      ];

      getPosts() {
          return this.listOfPosts;
      }

      deletePost(index: number) {
          this.listOfPosts.splice(index, 1);
      }

      addPost(post: Post) {
          this.listOfPosts.push(post);
      }

      editPost(index: number, post: Post) {
          this.listOfPosts[index] = post;
      }
    
}