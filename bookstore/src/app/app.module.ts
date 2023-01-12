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
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    GetAllBooksComponent,
    DisplayBooksComponent,
    HomeComponent,
    HeaderComponent,
    BookDetailsComponent,
    FooterComponent,
    WishListComponent
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
    MatMenuModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
