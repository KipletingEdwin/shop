import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsmenuPage } from './contactsmenu.page';

describe('ContactsmenuPage', () => {
  let component: ContactsmenuPage;
  let fixture: ComponentFixture<ContactsmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
