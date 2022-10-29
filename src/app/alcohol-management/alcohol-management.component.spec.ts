import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholManagementComponent } from './alcohol-management.component';

describe('AlcoholManagementComponent', () => {
  let component: AlcoholManagementComponent;
  let fixture: ComponentFixture<AlcoholManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
