import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { SignInPage } from './pages/sign-in/sign-in.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'sign-up', component: SignUpPage },
  { path: 'sign-in', component: SignInPage },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
