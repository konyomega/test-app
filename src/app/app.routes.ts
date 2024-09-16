import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { app } from '../../server';
import { UserProfileComponent } from './user-components/user-profile/user-profile.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [{

path:'',redirectTo:'login-component',pathMatch:'full'},
{ path: "user-profile",component:UserProfileComponent},
{path:'login-component',component:LoginComponentComponent}



];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}