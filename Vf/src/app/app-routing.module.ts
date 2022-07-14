import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrepaidComponent} from './prepaid/prepaid.component';
import {PostpaidComponent} from './postpaid/postpaid.component';
import {DongleComponent} from './dongle/dongle.component';
import {BuypreapaidComponent} from './buypreapaid/buypreapaid.component';
import {BuypostpaidComponent} from './buypostpaid/buypostpaid.component';
import {BuydongleComponent} from './buydongle/buydongle.component';
import {ReprepaidComponent} from './reprepaid/reprepaid.component';
import {RepostpaidComponent} from './repostpaid/repostpaid.component';
import {RedongleComponent} from './redongle/redongle.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {HpComponent} from './hp/hp.component'
const routes: Routes = [{
          path:'prepaid',
          component:PrepaidComponent
          },

          {
          path:'postpaid',
          component:PostpaidComponent
       },

       {
          path:'dongle',
          component:DongleComponent
          },

       {
          path:'buypreapaid',
          component:BuypreapaidComponent
          },

       {
          path:'buypostpaid',
          component:BuypostpaidComponent
          },
       {
          path:'buydongle',
          component:BuydongleComponent
          },
       {
          path:'reprepaid',
          component:ReprepaidComponent
          },
       {
          path:'repostpaid',
          component:RepostpaidComponent
          },
       {
          path:'redongle',
          component:RedongleComponent
          },

       {
          path:'invoice',
          component:InvoiceComponent
          },
       {
          path:'hp',
          component:HpComponent
          },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
