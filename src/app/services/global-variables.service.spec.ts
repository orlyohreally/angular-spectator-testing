import { TestBed } from '@angular/core/testing';

import { GlobalVariablesService } from './global-variables.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

describe('GlobalVariablesService', () => {
  let spectator: SpectatorService<GlobalVariablesService>;

  const createService = createServiceFactory({
    service: GlobalVariablesService
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return correct apiURL', () => {
    expect(spectator.service.apiURL).toBe(
      'https://jsonplaceholder.typicode.com/'
    );
  });
});
