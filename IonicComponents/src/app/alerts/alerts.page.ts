import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonButton, AlertController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAlert, IonButton]
})
export class AlertsPage implements OnInit {

  alertsButton = ['Confirm', 'Cancel'];

  advanceButton = [
    {
      text: "Install",
      role: "install",
      handler: () => {
        console.log('Installing the latest IOS updates');
      }
    },
    {
      text: "Cancel",
      role: "cancel",
      handler: () => {
        console.log('Cancel button is clicked');
      }
    }
  ];

  saveButton = ['Save', 'Cancel'];

  inputArray = [
    {
      type: 'text',
      placeholder: 'Name'
    },
    {
      type: 'password',
      placeholder: 'Password'
    },
  ]

  alertOpen = false;

  alertController = inject(AlertController);

  constructor() { }

  ngOnInit() {
  }

  showAlert(val:boolean){
    this.alertOpen = val;
  }

  async alertControl(){
  
    const alert = await this.alertController.create({
      header: "This is the header",
      message: "Testing the alert functionality",
      buttons: ['Update Alert']
    });

    await alert.present();
  }

  showResult(event: any){
    console.log(event);
  }

}
