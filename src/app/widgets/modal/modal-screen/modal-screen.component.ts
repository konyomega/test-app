// import { Component, OnInit,viewChild,ElementRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
// import { Injectable } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// @Injectable({ providedIn: 'root' })
// @Component({
//   selector: 'app-modal-screen',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './modal-screen.component.html',
//   styleUrl: './modal-screen.component.scss'
// })
// export class ModalScreenComponent implements OnInit{
// //  private modalRef: NgbModalRef; 
// showTemplate:any = true;
//   ngOnInit(){
//     const savedState = sessionStorage.getItem('showTemplate');
//     this.showTemplate = savedState === 'true';
//   }
// constructor (private route: ActivatedRoute, private router: Router){
  
// }

// cancelClick(){
 
//   this.showTemplate = !this.showTemplate;
//   sessionStorage.setItem('showTemplate', this.showTemplate.toString());
  
// }
// }

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-modal-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-screen.component.html',
  styleUrls: ['./modal-screen.component.scss']
})
export class ModalScreenComponent implements OnInit {
  showTemplate: boolean = true;

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
        const savedState = sessionStorage.getItem('showTemplate');
        this.showTemplate = savedState === 'true';
    } else {
        // Fallback logic if sessionStorage is not available
        this.showTemplate = true; // or any default value
    }
}

  constructor(private route: ActivatedRoute, private router: Router) {}

  cancelClick() {
    this.showTemplate = !this.showTemplate;
    sessionStorage.setItem('showTemplate', this.showTemplate.toString());
  }
}

