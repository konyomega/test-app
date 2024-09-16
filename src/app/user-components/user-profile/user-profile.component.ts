import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalScreenComponent } from '../../widgets/modal/modal-screen/modal-screen.component';
import { UserNavbarComponent } from '../../widgets/navbar/userProfileHeader/user-navbar/user-navbar.component';
import { UserFooterComponent } from '../../widgets/footer /user-footer/user-footer.component';
import { AdsenseComponent, AdsenseModule } from 'ng2-adsense';
import { CommercialsComponent } from '../../widgets/advertisements/commercials/commercials.component';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ModalScreenComponent,
    UserNavbarComponent,
    UserFooterComponent,
    AdsenseModule,CommercialsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
 
})

export class UserProfileComponent {

}
