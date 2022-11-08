import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendServiceService } from '../backend-service.service';
import {Book} from '../ObjectInterfaces/Book'


@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss'],
  providers: [BackendServiceService]
})
export class BookManagementComponent implements OnInit {
  bookshelf : Book[];
  loaned : Book[];
  wishlist : Book[];
  exampleTest : string;
  testBlock : any[];
  testService : BackendServiceService;
  testResponse : any;
  exampleBook : Book;
  userID = 1;

  constructor(private route: ActivatedRoute, private backendService : BackendServiceService) { }


  ngOnInit(): void {
    //this.bookshelf = [{title:"Test 1 Book",upc:"0129570239",all_pages:249,current_page:12,notes:"I had some feelings while eating the chips?"}];
    this.bookshelf = []
    this.testBlock = ["test"]
    this.exampleTest="A test message for beeping"
     this.updateBookshelf();
  }

  refresh(): void{
    window.location.reload()
  }

  getPotatoes(): any {
		this.backendService.potato().subscribe((example: any) => this.testResponse = example);
    console.log(this.testResponse);
	}

  async updateBookshelf(){
    this.backendService.getBooks(this.userID).subscribe(data => {
      for (let oneBook of data)
      {
        console.log(oneBook.book)
        this.bookshelf.push(oneBook.book)
      }
    })
  }

}
