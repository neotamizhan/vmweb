import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesByTagComponent } from './episodes-by-tag.component';

describe('EpisodesByTagComponent', () => {
  let component: EpisodesByTagComponent;
  let fixture: ComponentFixture<EpisodesByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
