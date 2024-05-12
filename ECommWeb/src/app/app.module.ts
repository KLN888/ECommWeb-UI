import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ECommComponent } from './modules/e-comm/e-comm.component';
import { EBookingComponent } from './modules/e-booking/e-booking.component';
import { EGroceriesComponent } from './modules/e-groceries/e-groceries.component';
import { EFoodDeliverComponent } from './modules/e-food-deliver/e-food-deliver.component';
import { ECabComponent } from './modules/e-cab/e-cab.component';
import { EFoodDeliverModule } from './modules/e-food-deliver/e-food-deliver.module';
import { ECommModule } from './modules/e-comm/e-comm.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EBookingComponent,
    EGroceriesComponent,
    EFoodDeliverComponent,
    ECabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    EFoodDeliverModule,
    ECommModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
