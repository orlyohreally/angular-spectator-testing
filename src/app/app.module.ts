import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { GlobalVariablesService } from './services/global-variables.service';
@NgModule({
  declarations: [AppComponent, PostListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [GlobalVariablesService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
