import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PostListComponent } from './post-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostsService } from '../services/posts.service';

describe('PostListComponent', () => {
  let spectator: Spectator<PostListComponent>;

  const createComponent = createComponentFactory({
    component: PostListComponent,
    imports: [MatCardModule, MatButtonModule],
    mocks: [PostsService]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should display the title', () => {
    expect(spectator.query('.mat-h1')).toHaveText('Posts');
  });
});
