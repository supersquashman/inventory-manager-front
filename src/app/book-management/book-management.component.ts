import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Book} from '../ObjectInterfaces/Book'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  bookshelf : Book[];
  loaned : Book[];
  wishlist : Book[];
  exampleTest : string;
  testBlock : any[];
  serverData: JSON;
  bookResponse: JSON;


  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.bookshelf = [{title:"Test 1 Book",upc:"0129570239",all_pages:249,current_page:12,notes:"I had some feelings while eating the chips?"}];
    this.testBlock = ["test"]
    this.exampleTest="A test message for beeping"
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.bookResponse = data as JSON;
      console.log(this.bookResponse);
    })
  }

}
