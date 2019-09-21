import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp
} from '@ngneat/spectator';
import { PostsService } from './posts.service';
import { GlobalVariablesService } from './global-variables.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<PostsService>;
  const createHttp = createHttpFactory(PostsService);

  beforeEach(() => {
    spectator = createHttp({
      providers: [
        { provide: GlobalVariablesService, useValue: { apiURL: 'apiURL/' } }
      ]
    });
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should get posts by http get request', () => {
    spectator.service.getPosts().subscribe();
    spectator.expectOne('apiURL/posts', HttpMethod.GET);
  });
});
