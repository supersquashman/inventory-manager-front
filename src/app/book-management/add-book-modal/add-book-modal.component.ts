import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendServiceService } from 'src/app/backend-service.service'; 
import {Book} from '../../ObjectInterfaces/Book'


@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {

  closeResult = '';
  bookTitle = '';
  bookAuthor = '';
  bookUPC = '';
  bookPages = '';
  bookNotes = '';
  bookCurrentPage = '';
  userID = 1;
  createBook = false;

	constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private backendService: BackendServiceService) {
	}

	saveBook(){
    let bookparams = {'title':this.bookTitle, 'upc':this.bookUPC,'all_pages':this.bookPages,'current_page':this.bookCurrentPage,'notes':this.bookNotes, 'author':this.bookAuthor}
    if(this.createBook){
      this.backendService.addBook(this.userID,bookparams)
    }
    else{this.backendService.updateBook(this.userID,bookparams)}
    this.activeModal.close()
	}

  setBookData(selectedBook: Book){
    let bookParams = {'title':selectedBook.title, 'upc':selectedBook.upc,'all_pages':selectedBook.all_pages,'current_page':selectedBook.current_page,'notes':selectedBook.notes, 'author':selectedBook.author}
    this.bookTitle=selectedBook.title
    this.bookAuthor=selectedBook.author
    this.bookUPC=selectedBook.upc
    this.bookPages=String(selectedBook.all_pages)
    this.bookCurrentPage=String(selectedBook.current_page)
    this.bookNotes=selectedBook.notes
    //need to check on if I need a bookID for tracking or if matching against user/upc/title is okay....

  }

  ngOnInit(newBook=false): void {
    this.createBook=newBook
    this.testBookPull('2432813868');
    this.bookUPC='2432813868';
  }

  async testBookPull(upcLookup:any){
    this.backendService.lookupUPC(upcLookup).subscribe(data => {
      console.log(data);
      this.bookNotes=data.toString();
    })
  }

}

