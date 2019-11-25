import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CritereComponentComponent } from './critere-component/critere-component.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [

  { path: 'critere-component', component: CritereComponentComponent },
  {path: '', component: HomeComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CritereComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
