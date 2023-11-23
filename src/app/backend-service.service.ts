import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { title } from 'process';

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

  addBook(userID: any, params:any) {
    this.httpClient.post<any>(this.pythonURL+'/bookable/'+userID+'/',null,{params}).subscribe();
  }

  removeBook(userID: any, bookID:any){
    let params = new HttpParams().set("doc_id", bookID)
    this.httpClient.delete<any>(this.pythonURL+'/bookable/'+userID+'/',{params}).subscribe();
  }

  updateBook(userID: any, params: any){
    this.httpClient.put<any>(this.pythonURL+'/bookable/'+userID+'/',null,{params}).subscribe();
  }

  getAlcohol(userID: any): Observable<any[]>{
    return this.httpClient.get<any[]>('http://127.0.0.1:5002/alcohol/'+userID+'/');
  }

  lookupUPC(upc:any){
    return this.httpClient.get<any[]>('/lookup/')
  }

  bookable(userID : any): any {
    return this.httpClient.get<JSON>( this.pythonURL+"/bookable/"+userID+"/");
  }

  potato(): any{
    return this.httpClient.get<String>(this.pythonURL+"/potato");
  }
}
