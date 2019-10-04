export class AppareilService {
  appareils = [
    {
      name : 'Grille Pain',
      status : 'éteint'
    },
    {
      name : 'Fer à repasser',
      status : 'en marche'
    },    {
      name : 'Chaudière',
      status : 'en marche'
    }
  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'en marche';
    }
  }
  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  switchOn(i: number) {
      this.appareils[i].status = 'en marche';
    }
  switchOff(i: number) {
      this.appareils[i].status = 'éteint';
    }
}
