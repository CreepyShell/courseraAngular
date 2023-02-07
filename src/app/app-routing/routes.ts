import { Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { DishdetailComponent } from '../components/dishdetail/dishdetail.component';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'contactus',
    component: ContactComponent,
  },
  {
    path: 'dishdetail/:id',
    component: DishdetailComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
