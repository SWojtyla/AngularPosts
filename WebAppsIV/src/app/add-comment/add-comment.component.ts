import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comments } from '../comments/comments.model';
import { UserDataService } from '../user/user.data.service';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Output() public newComment = new EventEmitter<Comments>();
  @Input() public post : Post;
  @Input() public user : User;
  constructor(private _userDataService: UserDataService) { }

  ngOnInit() {
  }

  addComment(commentText: HTMLInputElement): boolean {
    const comment = new Comments(commentText.value,new Date() );
    this.newComment.emit(comment);
    this._userDataService.addNewComment(this.post,new Comments(commentText.value,new Date())).subscribe();
    return false;
  }
  
}
