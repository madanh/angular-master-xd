import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ErrorHandlingService } from './error-handling.service';

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
  public err = '';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService
    ) { }
  
  getPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => this.posts = posts.slice(0,10),
            err => this.errorHandler.handle(err)
      );
  }

  deletePost(id: number){
    this.posts = this.posts.filter(p=>p.id!=id);
  }
}
