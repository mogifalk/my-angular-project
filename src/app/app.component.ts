import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent implements OnInit {
  private isConnected = false ;
  private switchOnAllEnabled = true;
  private switchOffAllEnabled = true;
  private lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils: any[];

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
  this.appareils = this.appareilService.appareils;
  }
  onConnect() {
    this.isConnected = true ;
  }
  onDisconnect() {
    this.isConnected = false ;
  }
  onSwitchOnAll() {
    this.appareilService.switchOnAll();
    this.switchOnAllEnabled = false;
    this.switchOffAllEnabled = true;
  }
  onSwitchOffAll() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
  displaySwitchOnAll() {
    for (const appareil of this.appareilService.appareils) {
      if (appareil.status === 'éteint') {
        return true; }
    }
    return false;
  }
  displaySwitchOffAll() {
    for (const appareil of this.appareilService.appareils) {
      if (appareil.status === 'en marche') {return true;}
    }
    return false;
  }
}
