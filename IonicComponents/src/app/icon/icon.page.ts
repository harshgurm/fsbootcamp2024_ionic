import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon,
   IonItem, NavController, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settings, heart, wifi, batteryCharging, home} from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule , IonIcon, IonItem, IonButton, RouterModule]
})
export class IconPage implements OnInit {


  navController: NavController = inject(NavController);

  constructor() {
    addIcons({ settings, heart, wifi, batteryCharging });
   }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}


//Task 1
// Add a link to input page from home
// Add a back or cancel button on input page