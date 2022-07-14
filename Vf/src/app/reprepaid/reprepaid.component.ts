import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-reprepaid',
  templateUrl: './reprepaid.component.html',
  styleUrls: ['./reprepaid.component.css']
})
export class ReprepaidComponent implements OnInit {
result:any

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }

 prer(data:any)
 {

this._api.preres(data).subscribe((result)=>{console.warn(result)})

}

greet()
  {
  alert("Recharge successfull")
 }
}
