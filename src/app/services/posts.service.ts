import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalVariablesService } from './global-variables.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../types/post';
import { share } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsApiURL = `${this.globalVariablesService.apiURL}posts`;
  constructor(
    private http: HttpClient,
    private globalVariablesService: GlobalVariablesService
  ) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsApiURL).pipe(share());
  }
}
