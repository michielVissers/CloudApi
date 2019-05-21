import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmusicComponent } from './postmusic.component';

describe('PostmusicComponent', () => {
  let component: PostmusicComponent;
  let fixture: ComponentFixture<PostmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
