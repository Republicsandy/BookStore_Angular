import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { CartComponent } from './Components/cart/cart.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DisplayBooksComponent,
    HomeComponent,
    HeaderComponent,
    BookDetailsComponent,
    FooterComponent,
    WishListComponent,
    CartComponent,
    PlaceOrderComponent,
    OrdersComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,MatTabsModule,
    MatMenuModule,
    NgxPaginationModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
