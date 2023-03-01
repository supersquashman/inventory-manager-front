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

  addBook(userID: any) {
    let newBook = {'title':"A New Book", 'upc':"0914803",'all_pages':2392,'current_page':291,'notes':"Oh boy here I go readin again"}
    //let params=new HttpParams().set("bookData",newBook);
    let params = new HttpParams().set("title",'A New Book').set('upc','0914803').set('all_pages',2392)
    params = params.set("current_page",291).set("notes",'Oh boy here I go readin again').set('userID',userID).set('action',"add")
    this.httpClient.post<any>(this.pythonURL+'/bookable/'+userID+'/',null,{params}).subscribe();
  }

  removeBook(userID: any){
    let params = new HttpParams().set("title",'A New Book').set('upc','0914803').set('all_pages',2392)
    params = params.set("current_page",291).set("notes",'Oh boy here I go readin again').set('userID',userID).set('action',"remove")
    this.httpClient.post<any>(this.pythonURL+'/bookable/'+userID+'/',null,{params}).subscribe();
  }

  lookupUPC(upc:any){
    return this.httpClient.get('https://www.brocade.io/api/items/'+upc)
  }

  bookable(userID : any): any {
    return this.httpClient.get<JSON>( this.pythonURL+"/bookable/"+userID+"/");
  }

  potato(): any{
    return this.httpClient.get<String>(this.pythonURL+"/potato");
  }
}
