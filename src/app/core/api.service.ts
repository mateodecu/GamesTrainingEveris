import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { mapValues } from 'lodash';
import * as interpolate from 'interpolate-url';
import { api } from 'src/environments/environment';

interface HttpParamsObject {
  [param: string]: string | string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = mapValues(api, (url: string) => {
    return (model?: object) => interpolate(url, model);
  });

  constructor() {}

  params(httpParams: HttpParamsObject) {
    return {
      params: new HttpParams({
        fromObject: httpParams
      })
    };
  }
}
