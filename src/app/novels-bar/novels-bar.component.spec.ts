import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelsBarComponent } from './novels-bar.component';

describe('NovelsBarComponent', () => {
  let component: NovelsBarComponent;
  let fixture: ComponentFixture<NovelsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
