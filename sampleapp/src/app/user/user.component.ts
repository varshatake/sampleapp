import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  resultres:any;
  constructor(private userService:UserService){

  }

  ngOninit(){
    var objuser = this.userService.getuser();
  
    return objuser.subscribe(res => {
      this.resultres = res;
      console.log('response :',res);
    })
  
  }

 
}
