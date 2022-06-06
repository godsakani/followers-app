import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(@Inject(String) private url: string, private http: HttpClient) {}
   

  getAll(){
   return this.http.get(this.url)
  }

  delete(id: any){
   return this.http.delete(this.url + '/' + id);

  }
  update(resource: any){
   return this.http.patch(this.url + '/' + resource.id,JSON.stringify({ isRead: true}))
  }
  creat(resource: any){
   return this.http.post(this.url,JSON.stringify(resource));
  }
}
