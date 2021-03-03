import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts = [];

  constructor(private http: HttpClient) { }
  
  getPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => this.posts = posts.slice(1,10));
    //could have used the jsonplaceholder's query param "limit"
    //like https://jsonplaceholder.typicode.com/posts?_limit=10
    //instead of slicing. Haven't figured if httpclient could tokenize 
    //the stream and limit only the first 10  
  }

  deletePost(id: number){
    this.posts = this.posts.filter(p=>p.id!=id);
  }
}
