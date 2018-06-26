import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, searchInput: any): any {
    //check is search term is undefined
    if (searchInput === undefined) return users; 
    return null;

    return users.filter(function(user) {
        return user.username.toLowerCase().includes(searchInput.toLowerCase());
    })
  }

}
