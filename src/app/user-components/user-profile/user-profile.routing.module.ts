import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { UserProfileComponent } from './user-profile.component';

const Userroutes: Routes=[
    {path:'', component: UserProfileComponent}
];

@NgModule({ 
    imports: [RouterModule.forChild(Userroutes)], 
    exports: [RouterModule] 
  }) 

  export class UserProfileRoutingModule{}