import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service'
import { ActivatedRoute} from '@angular/router';
import { ErrorHandlingService } from '../error-handling.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postId;
  comments = [];
  constructor(
    private route: ActivatedRoute,
    public commentService:CommentsService,
    private errorHandler: ErrorHandlingService
    ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.postId = Number(routeParams.get("id"));
      this.commentService.getComments(this.postId).subscribe( 
        comments => this.comments = comments,
        err => this.errorHandler.handle(err)      
        );
  }
  


}
