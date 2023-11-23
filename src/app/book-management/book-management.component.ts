import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendServiceService } from '../backend-service.service';
import {Book} from '../ObjectInterfaces/Book'
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';


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

  modalRef: AddBookModalComponent | null = null;

  constructor(private route: ActivatedRoute, private backendService : BackendServiceService, private modalService: NgbModal) { }


  ngOnInit(): void {
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

  addBook(){
    this.modalService.open(AddBookModalComponent)
  }

  removeBook(byeBook:Book){
    let params={}
    this.backendService.removeBook(this.userID, byeBook.doc_id)
  }

  editBook(selectedBook:Book){
    let params={}
    let editWindow = this.modalService.open(AddBookModalComponent)
    editWindow.componentInstance.setBookData(selectedBook)
    this.backendService.updateBook(this.userID, params) //upc and title?
    //this.modalService.open(EditBookModalComponent)
  }

  async updateBookshelf(){
    this.backendService.getBooks(this.userID).subscribe(data => {
      console.log(data)
      for (let oneBook of data)
      {
        this.bookshelf.push(oneBook.book)
      }
    })
  }

}
