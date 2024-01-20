import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ViewComponent } from './Component/view/view.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'Home', component:HomeComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'view/:id', component: ViewComponent},
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
