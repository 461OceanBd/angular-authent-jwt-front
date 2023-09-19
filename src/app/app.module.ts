import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePage } from './pages/home/home.page';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    NotFoundComponent,
    SignUpPage,
    SignInPage,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
