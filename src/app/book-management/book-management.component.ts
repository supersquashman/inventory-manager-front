import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Book} from '../ObjectInterfaces/Book'

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


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.bookshelf = [{title:"Test 1 Book",upc:"0129570239",all_pages:249,current_page:12,notes:"I had some feelings while eating the chips?"}];
    this.testBlock = ["test"]
    this.exampleTest="A test message for beeping"
  }

}
