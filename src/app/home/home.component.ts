import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../auth/error-dialog/error-dialog.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dogs = [
    {
      name: 'Perla',
      image: 'assets/images/img1.jpg'
    },
    {
      name: 'Coco',
      image: 'assets/images/img2.jpg'
    },
    {
      name: 'Sasha',
      image: 'assets/images/img3.jpg'
    },{
      name: 'Tommy',
      image: 'assets/images/img4.jpg'
    },{
      name: 'Danger',
      image: 'assets/images/img5.jpg'
    },{
      name: 'Mimi',
      image: 'assets/images/img6.jpg'
    },{
      name: 'Oso',
      image: 'assets/images/img7.jpg'
    },{
      name: 'Daisy',
      image: 'assets/images/img8.jpg'
    },{
      name: 'Rocket',
      image: 'assets/images/img9.jpg'
    },{
      name: 'Max',
      image: 'assets/images/img10.jpg'
    },{
      name: 'Lobo',
      image: 'assets/images/img11.jpg'
    },{
      name: 'Rex',
      image: 'assets/images/img12.jpg'
    }
  
  ];

  constructor(private dialog: MatDialog) {}

  
  onLike(dogName: string): void {
    
    console.log(`El usuario le ha dado like a ${dogName}`);
    
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: {
        title: '¡Like!',
        message: `El usuario le ha dado like a: ${dogName}`
      }
    });
  }

  onShare(dogName: string): void {
    console.log(`El usuario está interesado en adoptar a: ${dogName}`);
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: {
        title: '¡Interesado en Adopción!',
        message: `El usuario está interesado en adoptar a: ${dogName}`
      }
    });
  }
  
}
