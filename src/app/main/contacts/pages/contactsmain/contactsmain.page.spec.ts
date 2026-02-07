import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsmainPage } from './contactsmain.page';

describe('ContactsmainPage', () => {
  let component: ContactsmainPage;
  let fixture: ComponentFixture<ContactsmainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
