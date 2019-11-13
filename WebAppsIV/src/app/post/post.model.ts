import { Comments } from '../comments/comments.model';
import { User } from '../user/user.model';

export class Post {
  
  constructor(
    private _title: string,
    private _text: string,
    private _comments = new Array<Comments>(),
    private _dateAdded = new Date(),
    
    
  ) {}

  get title(): string {
    return this._title;
  }
  get comments(): Array<Comments> {
    return this._comments;
  }
  get dateAdded(): Date {
    return this._dateAdded;
  }
  get text(): string {
    return this._text;
  }
  
  
 
  
  addComments(text: string, dateAdded : Date) {
    this._comments.push(new Comments(text,dateAdded));
  }

  static fromJSON(json: any): Post {
    const post = new Post(json.title,json.text, json.comments.map(Comments.fromJSON), json.dateAdded);
    return post;
  }

  toJSON(): any {
    return {
      title: this.title,
      text:this.text,
      comments: this.comments,
      dateAdded: this.dateAdded
      
    };
  }
  
  
}