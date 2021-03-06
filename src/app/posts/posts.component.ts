import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    if(!this.postsService.posts.length){
      this.postsService.getPosts();
    }
  }
  
  deleteRow(id: number){
    this.postsService.deletePost(id);
  }
}
