import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './logout.guard';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component:ProfileComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'subscription',
        component: SubscriptionComponent
      }
    ]
  },
  {
    path:'**',
    component: PageNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
