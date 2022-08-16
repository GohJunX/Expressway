
// import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rating2',
  templateUrl: './rating2.page.html',
  styleUrls: ['./rating2.page.scss'],
})
export class Rating2Page implements OnInit {
  starRating = 0; 
  information =null;
  informationReview= null;
  avgRate= null;
 
  picUrl1 ="assets/image/highwayPic/";

constructor(
  private route : ActivatedRoute, 
  private service : SharedService
  ) {}

ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getInformation(id).subscribe((res) => {
      console.log(res);
      this.information = res;
    });

    
    this.service.getRevList(id).subscribe((res) => {
      console.log(res);
      this.informationReview = res;
    });

    this.service.getAvrRate(id).subscribe((res) => {
      console.log(res);
      this.avgRate = res;
    });
  
  }

}
