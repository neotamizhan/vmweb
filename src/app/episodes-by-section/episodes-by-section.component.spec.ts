import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesBySectionComponent } from './episodes-by-section.component';

describe('EpisodesBySectionComponent', () => {
  let component: EpisodesBySectionComponent;
  let fixture: ComponentFixture<EpisodesBySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesBySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesBySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
