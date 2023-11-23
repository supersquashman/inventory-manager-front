import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../ObjectInterfaces/Alcohol';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-alcohol-management',
  templateUrl: './alcohol-management.component.html',
  styleUrls: ['./alcohol-management.component.scss']
})
export class AlcoholManagementComponent implements OnInit {
  liquorCabinet : Alcohol[];
  wishlist : Alcohol[];
  restock: boolean;
  exampleTest : string;
  testBlock : any[];
  testService : BackendServiceService;
  testResponse : any;
  sampleBottle : Alcohol;
  userID = 1;

  constructor(private route: ActivatedRoute, private backendService : BackendServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.updateLiquorCabinet();
  }

  refresh(): void{
    window.location.reload()
  }

  addAlcohol(): void{
    //this.modalService.open(AddOrEditAlcoholModalComponent)
  }

  removeAlcohol(selectedAlcohol:Alcohol): void{

  }

  editAlcohol(selectedAlcohol:Alcohol): void{

  }

  async updateLiquorCabinet(){
    this.backendService.getBooks(this.userID).subscribe(data => {
      console.log(data)
      for (let oneBook of data)
      {
        console.log(oneBook)
        //console.log(oneBook.book)
        this.liquorCabinet.push(oneBook.book)
      }
    })
  }

}
