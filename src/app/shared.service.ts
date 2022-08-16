import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl ="https://localhost:5001/api";
readonly PhotoUrl ="https://localhost:5001/Photos";

  constructor(private http:HttpClient) { }

getDepList():Observable<any[]>{
return this.http.get<any>(this.APIUrl+'/highway'); 
    }

getInformation(id: any){
return this.http.get(this.APIUrl+'/highway/'+ id); 
    }

addHighway(val:any){
return this.http.post(this.APIUrl+'/highway',val)

    }

updateHighway(val:any){
return this.http.put(this.APIUrl+'/highway',val)
  
    }

deleteHighway(val:any){
return this.http.delete(this.APIUrl+'/highway/',val)
    
    }
  
getRevList(id:any){
return this.http.get(this.APIUrl+'/review/'+ id); 
    }
    
addRevList(id:any, val:any){
return this.http.post(this.APIUrl+'/review/'+ id, val);
    }

getAvrRate(id:any){
return this.http.get(this.APIUrl+'/averageRating/'+ id);     
    }

uploadPhoto(val:any){
return this.http.post(this.APIUrl+'/review/SaveFile', val);     
    }

}













// getAllPic() :Observable<any[]>{
//   return this.http.get<any>(this.picUrl); 
//     }

//     getReviewList():Observable<any[]>{
//       return this.http.get<any>(this.APIUrl+'/highway'); 
//         }

/////////////////////////////////////////////////////////////////////////////
//   public photos: UserPhoto[] = [];
//   private PHOTO_STORAGE: string = 'photos';

//   Storage.set({
//     key: this.PHOTO_STORAGE,
//     value: JSON.stringify(this.photos),
//   });

//   public async loadSaved() {
//     // Retrieve cached photo array data
//     const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
//     this.photos = JSON.parse(photoList.value) || [];
  
//   }
 
// // Display the photo by reading into base64 format
// for (let photo of this.photos) {
//   // Read each saved photo's data from the Filesystem
//   const readFile = await Filesystem.readFile({
//     path: photo.filepath,
//     directory: Directory.Data,
//   });

//   // Web platform only: Load the photo as base64 data
//   photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
// }



