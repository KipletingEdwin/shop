import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesmenuPage } from './servicesmenu.page';

describe('ServicesmenuPage', () => {
  let component: ServicesmenuPage;
  let fixture: ComponentFixture<ServicesmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
