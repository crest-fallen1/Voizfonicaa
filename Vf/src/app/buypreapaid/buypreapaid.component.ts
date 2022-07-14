import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-buypreapaid',
  templateUrl: './buypreapaid.component.html',
  styleUrls: ['./buypreapaid.component.css'],
  providers: [ApiService]
})
export class BuypreapaidComponent implements OnInit {
result:any

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }
  preb(data:any)
{
this._api.pres(data).subscribe((result)=>{console.warn(result)})
}

}



