import { Component, OnInit } from '@angular/core';
import { AppError } from '../coomon/app-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
 post?: any[];

 
  
 constructor(private service: PostService) { 
 
 }

 createPost(input: HTMLInputElement) {
   let post: any = { title: input.value};
   input.value ='';

  this.service.creat(post)
  .subscribe((response: any )=>{
    post.id = response.id;
    this.post?.splice(0, 0, post);
    console.log(response);
  },
  ( error: Response )=> {
    if(error.status == 400)
    alert('Site is down')
    else{
alert('An unspected error occured');
    console.log(error);
    }
    
  });
 }
 
 updatePost(post: any) {
   this.service.update(post)
   .subscribe((response: any) =>{
     console.log(response);
   },
   error => {
    alert('An unspected error occured');
    console.log(error)
  });
  //  this.http.put(this.url, JSON.stringify(post))
 }
 
  deletePost(post: any) {
    this.service.delete(345)
      .subscribe(
        (        response: any) => {
          let index: any = this.post?.indexOf(post);
          this.post?.splice(index, );
          console.log(response);
        },
         (error: Response) => {
          if(new AppError === 404)
          alert('this post has already been delete.');
          else {
          
          }
         
        });
  }
 
 ngOnInit() {
  this.service.getAll()
  .subscribe((response: any) =>{
    this.post = response;
  });
 }

}
