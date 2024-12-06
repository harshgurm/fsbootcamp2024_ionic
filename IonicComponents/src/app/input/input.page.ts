import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController ,
   IonButton, IonList, IonInput, IonLabel, IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonList, IonInput, IonLabel, IonItem]
})
export class InputPage implements OnInit {

  navController:NavController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
