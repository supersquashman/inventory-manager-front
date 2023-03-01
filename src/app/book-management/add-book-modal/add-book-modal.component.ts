import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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

	constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {
	}

	saveBook(){

	}

  ngOnInit(): void {
  }

}

