import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { app } from '../../server';
import { UserProfileComponent } from './user-components/user-profile/user-profile.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NewuserComponent } from './sign-up/newuser/newuser.component';

export const routes: Routes = [{

path:'',redirectTo:'login-component',pathMatch:'full'},
{ path: "user-profile",component:UserProfileComponent},
{path:'login-component',component:LoginComponentComponent},
{path:'newuser',component:NewuserComponent}



];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}