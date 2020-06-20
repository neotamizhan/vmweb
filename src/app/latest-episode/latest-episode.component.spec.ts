import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEpisodeComponent } from './latest-episode.component';

describe('LatestEpisodeComponent', () => {
  let component: LatestEpisodeComponent;
  let fixture: ComponentFixture<LatestEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
