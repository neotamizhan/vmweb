import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeByNovelComponent } from './episode-by-novel.component';

describe('EpisodeByNovelComponent', () => {
  let component: EpisodeByNovelComponent;
  let fixture: ComponentFixture<EpisodeByNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeByNovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeByNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
