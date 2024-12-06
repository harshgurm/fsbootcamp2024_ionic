import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
   NavController, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonList, IonLabel, IonItem]
})
export class ListPage implements OnInit {

  navController:NavController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

}
