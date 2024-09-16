import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { Route } from "@angular/router";
import { AppRoutingModule, routes } from "./app.routes";
import { UserProfileComponent } from "./user-components/user-profile/user-profile.component";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { CommonModule } from "@angular/common";
import { ModalScreenComponent } from "./widgets/modal/modal-screen/modal-screen.component";
import { UserNavbarComponent } from "./widgets/navbar/userProfileHeader/user-navbar/user-navbar.component";
import { UserFooterComponent } from "./widgets/footer /user-footer/user-footer.component";
import { AdsenseModule } from 'ng2-adsense';
@NgModule({
    declarations: [
        
      ],
      imports: [
        AppComponent,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        AppRoutingModule,
        UserProfileComponent,
        LoginComponentComponent,
        CommonModule, 
        ModalScreenComponent,
        UserNavbarComponent,
        UserFooterComponent,
        AdsenseModule.forRoot()
      ],
      providers: [],
      bootstrap: [],
      
})
export class AppModule{}