import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css'],
  providers: [ApiService]
})
export class PostpaidComponent implements OnInit {
    items2:any;
    error: any;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
       this.get();
  }
  get=()=> {
     this.api.getItems2().subscribe(
     data=>{ this.items2=data;},
      );
          (error: any) => this.error = error

}
}
