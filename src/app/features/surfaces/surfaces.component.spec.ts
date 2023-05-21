import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacesComponent } from './surfaces.component';

describe('SurfacesComponent', () => {
  let component: SurfacesComponent;
  let fixture: ComponentFixture<SurfacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurfacesComponent]
    });
    fixture = TestBed.createComponent(SurfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
