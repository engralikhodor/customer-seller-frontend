import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule } from '@angular/common/http';
import { SellerModule } from './seller/seller.module';
import { TaskModule } from './task/task.module';
import { CommunityModule } from './community/community.module';

// Import BrowserAnimationsModule
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import your library
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomerModule,
    SellerModule,
    TaskModule,
    CommunityModule,
    HttpClientModule,
    NgbModule,
    // Specify your library as an import
    AlertModule.forRoot({ maxMessages: 5, timeout: 3000, positionX:'right', positionY:'top' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//todo check caching in angular
//todo check phpmailer in laravel
//todo check online/offline mode in angular
//todo check emitter in angular
//todo check location (map) + images + PDF + Video upload