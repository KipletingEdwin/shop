import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesmainPage } from './servicesmain.page';

describe('ServicesmainPage', () => {
  let component: ServicesmainPage;
  let fixture: ComponentFixture<ServicesmainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
