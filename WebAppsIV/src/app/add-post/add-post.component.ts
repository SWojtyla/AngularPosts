import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Post
} from '../post/post.model';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Comments
} from '../comments/comments.model';
import { UserDataService } from '../user/user.data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() public newPost = new EventEmitter < Post > ();
  public post: FormGroup;

  constructor(private formbuilder: FormBuilder,private _userDataService: UserDataService) {}

  ngOnInit() {
    this.post = this.formbuilder.group({
      title: ['title'],
      text: ['text']
    })
    
  }
  onSubmit() {
    this.newPost.emit(new Post(this.post.value.title, this.post.value.text, new Array < Comments > (), new Date()));
    this._userDataService.addNewPost(new Post(this.post.value.title,this.post.value.text, new Array < Comments > (), new Date())).subscribe();
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
          characters (got ${errors.minlength.actualLength})`;
    }
  }
  
  }
