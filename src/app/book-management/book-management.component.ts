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

  addBook(){
    //this.backendService.addBook(this.userID);
    this.modalService.open(AddBookModalComponent)
  }

  removeBook(){
    this.backendService.removeBook(this.userID)
  }

  /*open(content:any) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }*/
  

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
