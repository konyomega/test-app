import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFooterComponent } from '../widgets/footer /user-footer/user-footer.component';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule,UserFooterComponent],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {

}
