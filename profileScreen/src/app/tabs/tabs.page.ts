import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {chatboxEllipsesOutline, chatbubblesOutline, heartOutline, homeOutline, logOutOutline, notificationsOutline, optionsOutline, personOutline} from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({ 
      personOutline, 
      optionsOutline, 
      notificationsOutline, 
      logOutOutline, 
      chatbubblesOutline,
      heartOutline,
      homeOutline,
      chatboxEllipsesOutline
    });
   }

  ngOnInit() {
  }

}
