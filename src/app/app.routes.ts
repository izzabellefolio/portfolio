import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contacts', component: Contacts },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}