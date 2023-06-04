import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';


const appRouter: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: WorkComponent},
  {path: 'service', component: ServicesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent,
    HeaderComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
