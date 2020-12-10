import { Component } from '@angular/core';

@Component({
  selector: 'app-reseaux-sociaux',
  templateUrl: './reseaux-sociaux.component.html',
  styleUrls: [ './reseaux-sociaux.component.scss' ]
})
export class ReseauxSociauxComponent {
  positionTooltip = 'below';

  redirectYoutube(): void {
    window.location.href = 'https://www.youtube.com/channel/UCP0elXZ7DZHFLYrKrDAqfvg';
  }

  redirectFacebook(): void {
    window.location.href = 'https://www.facebook.com/CashBrolikOfficiel/';
  }

  redirectTwitter(): void {
    window.location.href = 'https://twitter.com/cash_brolik';
  }

  redirectInstagram(): void {
    window.location.href = 'https://www.instagram.com/cash_brolik/';
  }

}
