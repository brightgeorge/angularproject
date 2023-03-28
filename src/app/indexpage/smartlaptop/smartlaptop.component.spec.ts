import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlaptopComponent } from './smartlaptop.component';

describe('SmartlaptopComponent', () => {
  let component: SmartlaptopComponent;
  let fixture: ComponentFixture<SmartlaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartlaptopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
