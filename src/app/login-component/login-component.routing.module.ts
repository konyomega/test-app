import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LoginComponentComponent } from "./login-component.component";
import { routes } from "../app.routes";
const loginRoute: Routes=[{path:'',component:LoginComponentComponent}]
@NgModule({
imports:[RouterModule.forChild(loginRoute)],
exports:[RouterModule]
})

export class Loginroute{

}