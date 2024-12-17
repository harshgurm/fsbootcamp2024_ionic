import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
   NavController, IonList, IonLabel, IonItem, IonReorderGroup, IonReorder } from '@ionic/angular/standalone';
   import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton, IonList, IonLabel, IonItem,
     IonReorderGroup, IonReorder]
})
export class ListPage implements OnInit {

  navController:NavController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  moveBack(){
    this.navController.back();
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>){
    console.log(ev);
    ev.detail.complete();
  }

}
