import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsingledeleteComponent } from './showsingledelete.component';

describe('ShowsingledeleteComponent', () => {
  let component: ShowsingledeleteComponent;
  let fixture: ComponentFixture<ShowsingledeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsingledeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsingledeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
