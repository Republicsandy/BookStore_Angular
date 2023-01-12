import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HomeComponent } from './Components/home/home.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'books', component: GetAllBooksComponent },
      {path: 'details', component:BookDetailsComponent},
      {path: 'wish', component:WishListComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
