import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUserComponent } from './layout-user.component';

describe('LayoutUserComponent', () => {
  let component: LayoutUserComponent;
  let fixture: ComponentFixture<LayoutUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutUserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
