import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-repostpaid',
  templateUrl: './repostpaid.component.html',
  styleUrls: ['./repostpaid.component.css'],
  providers: [ApiService]
})
export class RepostpaidComponent implements OnInit {
result:any
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }
  postr(data:any)
{
this._api.postres(data).subscribe((result)=>{console.warn(result)})
}
greet2()
  {
  alert("Recharge successfull")
 }
}
