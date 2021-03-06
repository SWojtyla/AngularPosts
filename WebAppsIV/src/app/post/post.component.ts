import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() public post : Post;
  @Input() public user : User;
  constructor() { }

  ngOnInit() {
  }

}
