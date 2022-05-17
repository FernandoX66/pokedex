import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { slideDown } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideDown],
})
export class HomeComponent {
  pageTitle!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => {
          let route = this.route.snapshot;

          while (route.firstChild) {
            route = route.firstChild;
          }

          return route.data;
        })
      )
      .subscribe(({ pageTitle }) => {
        this.pageTitle = pageTitle;
      });
  }

  isLargeScreen(): boolean {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth > 720) {
      return true;
    } else {
      return false;
    }
  }
}
