import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RedVolucionariosAdmin';

  constructor(private router: Router) {
  }

  redirectToNodes() {
    this.router.navigate(['nodos']);
  }

  redirectToSunburst() {
    this.router.navigate(['sunburst']);
  }

}
