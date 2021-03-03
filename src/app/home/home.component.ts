import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  getPosts(){
    this.postsService.getPosts();
  }
}
