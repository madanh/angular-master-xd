import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service'
import { ActivatedRoute} from '@angular/router';

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
    public commentService:CommentsService
    ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.postId = Number(routeParams.get("id"));
      this.commentService.getComments(this.postId).subscribe( comments => {
        this.comments = comments;
      });
  }
  


}
