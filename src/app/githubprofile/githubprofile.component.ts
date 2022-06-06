import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.sass']
})
export class GithubprofileComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.route.paramMap
    // .subscribe(params => {
    //  let login = params.get('login');
    //   console.log(login);
    // })
  }

}
