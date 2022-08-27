import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLeavesComponent } from './hod-leaves.component';

describe('HodLeavesComponent', () => {
  let component: HodLeavesComponent;
  let fixture: ComponentFixture<HodLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
