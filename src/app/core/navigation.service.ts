import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  Data,
  ParamMap
} from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private routeChange: ReplaySubject<ActivatedRoute> = new ReplaySubject(1);

  public route: Observable<ActivatedRoute> = this.routeChange.pipe(
    map(() => {
      let route = this.router.routerState.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    })
  );

  public data: Observable<Data> = this.route.pipe(flatMap(route => route.data));

  public query: Observable<ParamMap> = this.route.pipe(
    flatMap(route => route.queryParamMap)
  );

  constructor(private router: Router) {
    router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(this.routeChange);
  }
}
