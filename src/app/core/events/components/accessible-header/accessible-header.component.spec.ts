import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleHeaderComponent } from './accessible-header.component';

describe('AccessibleHeaderComponent', () => {
  let component: AccessibleHeaderComponent;
  let fixture: ComponentFixture<AccessibleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccessibleHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
