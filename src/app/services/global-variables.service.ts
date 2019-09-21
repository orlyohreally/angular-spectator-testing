import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  constructor() {}

  public get apiURL(): string {
    return environment.apiURL;
  }
}
