import { TestBed } from '@angular/core/testing';

import { SongKickService } from './song-kick.service';

describe('SongKickService', () => {
  let service: SongKickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongKickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
