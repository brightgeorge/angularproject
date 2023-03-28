import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartaccessoriesComponent } from './smartaccessories.component';

describe('SmartaccessoriesComponent', () => {
  let component: SmartaccessoriesComponent;
  let fixture: ComponentFixture<SmartaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartaccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
