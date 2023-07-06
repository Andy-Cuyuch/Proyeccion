import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMayorComponent } from './hijo-mayor.component';

describe('HijoMayorComponent', () => {
  let component: HijoMayorComponent;
  let fixture: ComponentFixture<HijoMayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoMayorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoMayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
