import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
   items3:any;
   error: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
       this.get();
    }
   get=()=> {
     this.api.getItems3().subscribe(
     data=>{ this.items3=data;},
      );
          (error: any) => this.error = error

}


  }


