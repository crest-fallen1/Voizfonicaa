import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css'],
  providers: [ApiService]
})
export class HpComponent implements OnInit {
result:any
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }
helpb(data1:any)
{
this._api.helpsv(data1).subscribe((result)=>{console.warn(result)})
}

greet4()
  {
  alert("Your query is noted. Necessary actions will be taken soon")
 }

}
