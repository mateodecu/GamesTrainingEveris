import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  Params
} from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements CanActivate {
  private config: ReplaySubject<Params> = new ReplaySubject(1);

  public getWithDefaults(defaults: object) {
    return this.config.pipe(map(config => ({ ...defaults, ...config })));
  }

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    this.config.next(route.queryParams);
    this.config.complete();
    this.router.navigate(['']);
    return false;
  }
}
