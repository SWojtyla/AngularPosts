import { Post } from '../post/post.model';
import { Comments } from '../comments/comments.model';
export class User {
    
    constructor(
      private _firstName: string,
      private _lastName:string,
      private _email: string,
      private _posts = new Array<Post>(),
      private _dateRegistered = new Date(),
      
    ) {}
  
    get firstName(): string {
      return this._firstName;
    }
    get lastName(): string {
      return this._lastName;
    }
    get dateRegistered(): Date {
      return this._dateRegistered;
    }
    get email(): string {
      return this._email;
    }
    get posts(): Array<Post>{
        return this._posts;
    }
   
    
    addPost(title: string, text : string,dateAdded = new Date(),comments = new Array<Comments>()) {
      this._posts.push(new Post(title,text,comments,dateAdded));
    }
  
    static fromJSON(json: any): User {
      const user = new User(json.firstName,json.lastName,json.email,json.posts.map(Post.fromJSON), json.dateRegistered);
      return user;
    }
  
    toJSON(): any {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        posts:this.posts,
        dateRegistered:this.dateRegistered
      };
    }
    
    
  }