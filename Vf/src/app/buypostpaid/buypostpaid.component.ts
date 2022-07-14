import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-buypostpaid',
  templateUrl: './buypostpaid.component.html',
  styleUrls: ['./buypostpaid.component.css'],
  providers: [ApiService]
})
export class BuypostpaidComponent implements OnInit {
result:any
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }
postb(data:any)
{

this._api.posts(data).subscribe((result)=>{console.warn(result)})
}

}
