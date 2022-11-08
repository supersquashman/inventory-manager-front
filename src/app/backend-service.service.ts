import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private httpClient: HttpClient) { }

  serverData: JSON;
  bookResponse: JSON[];
  pythonURL = 'http://127.0.0.1:5002';


  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/hello').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getBooks(userID: any) : Observable<any[]>{
    return this.httpClient.get<any[]>('http://127.0.0.1:5002/bookable/'+userID+'/');
  }

  bookable(userID : any): any {
    return this.httpClient.get<JSON>( this.pythonURL+"/bookable/"+userID+"/");
  }

  potato(): any{
    return this.httpClient.get<String>(this.pythonURL+"/potato");
  }
}
