import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';
import { Userprofile } from './components/userprofile/userprofile';
import { Options } from './components/options/options';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkWithHref, RouterOutlet, Userprofile, Options],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  routerURL = inject(Router);

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          initFlowbite();
        });
      }
    });
  }
}
