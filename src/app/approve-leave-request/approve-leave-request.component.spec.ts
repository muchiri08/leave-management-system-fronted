import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLeaveRequestComponent } from './approve-leave-request.component';

describe('ApproveLeaveRequestComponent', () => {
  let component: ApproveLeaveRequestComponent;
  let fixture: ComponentFixture<ApproveLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
