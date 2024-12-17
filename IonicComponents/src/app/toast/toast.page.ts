import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
   IonToast, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonToast]
})
export class ToastPage implements OnInit {

  showToast:boolean = false;

  toastController:ToastController = inject(ToastController);

  toastButton = [
    {
      text: "More Information",
      role: "info",
      handler: () => {
        console.log('Information is clicked');
      }
    },
    {
      text: "Cancel",
      role: "cancel",
      handler: () => {
        console.log('Cancel is clicked');
      }
    }
  ]

  constructor() {
    addIcons({ home });
   }  

  ngOnInit() {
  }

  openToast(val:boolean){
    this.showToast = val;
  }

  async displayToast(){
    const toast = await this.toastController.create({
      message: "This is my Toast",
      duration: 3000,      
    })

    toast.present();
  }

}
