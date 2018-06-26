import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent  } from './components/chat-window/chat-window.component';
import { LoginComponent  } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent  } from './components/register/register.component';



const routes: Routes = [
  {path:'home', component: ChatWindowComponent },
  {path:'', component: HomeComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})


export class AppRoutingModule {
}
