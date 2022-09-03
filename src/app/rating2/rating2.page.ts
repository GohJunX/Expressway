import { Rating3Page } from './../rating3/rating3.page';

// import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';



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
  safeUrl: any;

 
  picUrl1 ="assets/image/highwayPic/";
  reviewImageName:string; 
  PhotoFilePath="https://localhost:5001/Photos/";

constructor(
  private route : ActivatedRoute, 
  private service : SharedService,
  private sanitizer: DomSanitizer, 
 
  ) {}

//   loadNull(){
// if(Component.templateUrl.getElementById('image').src==PhotoFilePath){
//   Component.templateUrl.getElementById("element").style.display = "none";

// }
//   }
  getSafeUrl(url){
    this.safeUrl =this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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

  // photoURL() {
  //   return this.sanitizer.bypassSecurityTrustUrl(this.mediaItems[1].url);
  // }

}
