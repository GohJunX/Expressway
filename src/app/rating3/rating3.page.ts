import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rating3',
  templateUrl: './rating3.page.html',
  styleUrls: ['./rating3.page.scss'],
})
export class Rating3Page implements OnInit {
  starRating = 0; 
  information =null;
  informationReview= null;
  
  
  

  constructor( private route : ActivatedRoute, private service : SharedService) { }
  
  @Input() review:any;
  highwayId:string;
  reviewName:string;
  reviewRating:string;
  reviewComment:string;
  //////
  reviewImageName:string; 
  PhotoFilePath:string;
  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');

    // this.service.getRevList(id).subscribe((res) => {
    //   console.log(res);
    //   this.informationReview = res;
    // });

    // this.reviewImageName=this.review.reviewImageName;
    // this.PhotoFilePath=this.review.PhotoFilePath;
}





addReview(){
  const id = this.route.snapshot.paramMap.get('id');
  
  var val ={highwayId:this.highwayId, reviewName:this.reviewName, reviewRating:this.reviewRating, reviewComment:this.reviewComment, reviewImageName:this.reviewImageName};
    this.service.addRevList(id,val).subscribe((res) => {
      console.log(res);
      this.informationReview = res;
    });
//   this.service.addRevList(val).subscribe(res=>{alert(res.toString());
 alert("Thanks for the comment!!");
}
////
uploadPhotos(event){
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile',file, file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.reviewImageName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl + this.reviewImageName;
    })
  }
//   });




}
