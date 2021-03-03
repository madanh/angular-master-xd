import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  // https://jsonplaceholder.typicode.com/posts/{id}/comments 
  postId;
  constructor(private http: HttpClient) { }

  getComments(id:number): Observable<Comment[]> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    return this.http.get<Comment[]>(url)
      // .pipe(tap(comments=> this.comments = comments));
  }
}
