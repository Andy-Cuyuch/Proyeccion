import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMedianoComponent } from './hijo-mediano.component';

describe('HijoMedianoComponent', () => {
  let component: HijoMedianoComponent;
  let fixture: ComponentFixture<HijoMedianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoMedianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoMedianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
