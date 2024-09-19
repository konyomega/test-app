import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalScreenComponent } from '../../widgets/modal/modal-screen/modal-screen.component';
import { UserNavbarComponent } from '../../widgets/navbar/userProfileHeader/user-navbar/user-navbar.component';
import { UserFooterComponent } from '../../widgets/footer /user-footer/user-footer.component';
import { AdsenseComponent, AdsenseModule } from 'ng2-adsense';
import { CommercialsComponent } from '../../widgets/advertisements/commercials/commercials.component';
import { Services} from '../../services';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ModalScreenComponent,
    UserNavbarComponent,
    UserFooterComponent,
    AdsenseModule,CommercialsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  providers: [Services]  // this is important to ensure service is available throughout the component hierarchy.
 
})

export class UserProfileComponent implements OnInit  {
  arr: any;
 res:any
constructor(public userServices: Services, public userInfo:Services){}
  ngOnInit(): void {
    this.arr= {
      "name":"kunal",
      "email":"kunal@gmail.com",
      "password":"123@"
    }
    // console.log(arr,"int the user profile");
   this.userServices.add(this.arr);
   this.userInfo.get(this.res)
   console.log('in the user profile',this.res);
  }

  

// method to call service


}
