import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css'],
  providers: [ApiService]
})



//
// @Component({
//   selector: 'app-prepaid',
//   templateUrl: './prepaid.component.html',
//   styleUrls: ['./prepaid.component.css'],
//   providers:[ApiService]
//   })

export class PrepaidComponent implements OnInit
  {


   items:any;
   error: any;

  constructor(private api: ApiService) {}
    ngOnInit():void{

    this.get();
    }
   get=()=> {
     this.api.getItems().subscribe(
     data=>{ this.items=data;},
      );
          (error: any) => this.error = error

}
}
