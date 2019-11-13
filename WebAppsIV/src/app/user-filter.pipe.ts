import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], lastName: string): any {
    if (!lastName || lastName.length === 0) {
      return users;
    }else{
    return users.filter(user =>
      user.lastName.toLowerCase().startsWith(lastName.toLowerCase())
    );}
  }

}
