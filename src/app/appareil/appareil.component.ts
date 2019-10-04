import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName;
  @Input() appareilStatus;
  @Input() index;
  constructor(private appareilService: AppareilService) {
  /*  setTimeout(
      () => {
        this.appareilStatus = 'en marche';
      }, 900
    );*/
  }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'en marche') {
      return 'green';
    } else {
      return 'red';
    }
  }
  onSwitch() {
    if (this.appareilStatus === 'en marche') {
      this.appareilService.switchOff(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOn(this.index);
    }
  }
}
