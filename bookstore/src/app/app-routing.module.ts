import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { CartComponent } from './Components/cart/cart.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { AuthanticationGuard } from './Guard/authantication.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  {
    path: 'home',component:HomeComponent,canActivate:[AuthanticationGuard],
    children: [
      { path: 'books', component: DisplayBooksComponent },
      {path: 'quick', component:BookDetailsComponent},
      {path: 'wish', component:WishListComponent},
      {path:'cart',component:CartComponent},
      {path:'order', component:PlaceOrderComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
