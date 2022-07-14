import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-buydongle',
  templateUrl: './buydongle.component.html',
  styleUrls: ['./buydongle.component.css'],
  providers: [ApiService]
})
export class BuydongleComponent implements OnInit {
result:any
  constructor(private _api:ApiService) {


   }

  ngOnInit(): void {
  }
  dongleb(data:any)
{
this._api.dongles(data).subscribe((result)=>{console.warn(result)})

}

}
