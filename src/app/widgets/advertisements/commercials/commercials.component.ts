import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-commercials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commercials.component.html',
  styleUrl: './commercials.component.scss'
})
export class CommercialsComponent implements OnInit {
ngOnInit(){
 console.log("hello from google ads")
}
constructor(){}

}
