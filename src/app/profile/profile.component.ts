import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
    
  follows?: any [];

  constructor(http: HttpClient) { 
    http.get('https://api.github.com/users/godsakani/followers')
    .subscribe((response : any) => {
      this.follows = response;
      console.log(response);
    })
  }
       
  ngOnInit(): void {
  //  this.service.getAll()
  //  .subscribe(follows => this.follows);
  }

}
