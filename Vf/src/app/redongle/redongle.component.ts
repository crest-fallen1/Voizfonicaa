import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-redongle',
  templateUrl: './redongle.component.html',
  styleUrls: ['./redongle.component.css'],
  providers: [ApiService]
})
export class RedongleComponent implements OnInit {
result:any
constructor(private _api:ApiService) { }
  ngOnInit(): void {
  }
  dongler(data:any)
{
this._api.dongleres(data).subscribe((result)=>{console.warn(result)})

}
greet3()
  {
  alert("Recharge successfull")
 }

}

