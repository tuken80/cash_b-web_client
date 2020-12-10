import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  titre = '';

  constructor(private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case '/boutique/produits': {
        this.titre = 'BOUTIQUE';
        break;
      }
      case '/boutique/panier': {
        this.titre = 'PANIER';
        break;
      }
      case '/social/contact': {
        this.titre = 'PAGE DE CONTACT';
        break;
      }
      case '/social/actualitees': {
        this.titre = 'ACTUALITEES';
        break;
      }
      case '/social/evenements': {
        this.titre = 'EVENEMENTS ORGANISES';
        break;
      }
      case '/social/newsletter': {
        this.titre = 'INSCRIPTION A LA NEWSLETTER';
        break;
      }
      case '/musique/videos': {
        this.titre = 'CLIPS VIDEOS';
        break;
      }
      case '/musique/downloads': {
        this.titre = 'TELECHARGEMENTS';
        break;
      }
      case '/license': {
        this.titre = 'MENTIONS LEGALES';
        break;
      }
    }
  }
}
