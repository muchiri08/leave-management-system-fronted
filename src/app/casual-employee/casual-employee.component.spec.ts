import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualEmployeeComponent } from './casual-employee.component';

describe('CasualEmployeeComponent', () => {
  let component: CasualEmployeeComponent;
  let fixture: ComponentFixture<CasualEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
