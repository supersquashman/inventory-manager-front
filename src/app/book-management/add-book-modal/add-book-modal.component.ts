import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {

  closeResult = '';

	constructor(private modalService: NgbModal) {}

	open(content : any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	close(input:any) {}
	dismiss(input:any){}

  ngOnInit(): void {
  }

}
