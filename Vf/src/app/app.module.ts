import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { HomeComponent } from './home/home.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { BuypreapaidComponent } from './buypreapaid/buypreapaid.component';
import { BuypostpaidComponent } from './buypostpaid/buypostpaid.component';
import { BuydongleComponent } from './buydongle/buydongle.component';
import { ReprepaidComponent } from './reprepaid/reprepaid.component';
import { RepostpaidComponent } from './repostpaid/repostpaid.component';
import { RedongleComponent } from './redongle/redongle.component';
import { BillpostComponent } from './billpost/billpost.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HpComponent } from './hp/hp.component';
import { HelpresponsesComponent } from './helpresponses/helpresponses.component';

@NgModule({
  declarations: [
    AppComponent,
    PrepaidComponent,
    HomeComponent,
    PostpaidComponent,
    DongleComponent,
    BuypreapaidComponent,
    BuypostpaidComponent,
    BuydongleComponent,
    ReprepaidComponent,
    RepostpaidComponent,
    RedongleComponent,
    InvoiceComponent,
    HpComponent,
    HelpresponsesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
       ApiService,
  ],
  bootstrap: [
    AppComponent
    ],
})
export class AppModule { }
