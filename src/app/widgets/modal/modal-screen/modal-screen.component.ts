import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-screen.component.html',
  styleUrl: './modal-screen.component.scss'
})
export class ModalScreenComponent implements OnInit{
  ngOnInit(){
  this.isButtonclicked();
  }
constructor (private modalService: NgbModal){
  this.modalService.dismissAll();
}

isChkBoxShown = true;
cancelClick()
{
  this.isChkBoxShown = !this.isChkBoxShown;
  sessionStorage.setItem('isChkBoxShown','clicked');
  
}

 isButtonclicked(){
let isButtonclicked= sessionStorage.getItem('isChkBoxShown');
if(isButtonclicked === 'clicked'){
  this.isChkBoxShown = !this.isChkBoxShown;
}
else{
  this.isChkBoxShown = true;
}

 }

}
