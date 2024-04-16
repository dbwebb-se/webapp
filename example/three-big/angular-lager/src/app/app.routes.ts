import {Routes} from '@angular/router';

import {ProductsListComponent} from './products-list/products-list.component';
import {PackListComponent} from './pack-list/pack-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'products-list', component: ProductsListComponent},
  {path: 'pack-list', component: PackListComponent},
  {path: '', redirectTo: '/products-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
