import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent},
  { path:'**',component:NopagefoundComponent}
];

export const AppRoutes = RouterModule.forRoot(appRoutes,{ useHash:true });
