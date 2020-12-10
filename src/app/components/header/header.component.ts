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
      case '/actualitees.html': {
        this.titre = 'ACTUALITEES';
        break;
      }
      case '/boutique.html': {
        this.titre = 'BOUTIQUE';
        break;
      }
      case '/contact.html': {
        this.titre = 'PAGE DE CONTACT';
        break;
      }
      case '/evenements.html': {
        this.titre = 'EVENEMENTS';
        break;
      }
      case '/license.html': {
        this.titre = 'PAGE DE LICENSE';
        break;
      }
      case '/newsletter.html': {
        this.titre = 'INSCRIPTION A LA NEWSLETTER';
        break;
      }
      case '/musiques.html': {
        this.titre = 'MUSIQUES';
        break;
      }
    }
  }
}
