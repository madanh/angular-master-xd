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
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=30')
      .pipe(tap(posts => this.posts = posts));
  }

  deletePost(id: number){
    this.posts = this.posts.filter(p=>p.id!=id);
  }
}
