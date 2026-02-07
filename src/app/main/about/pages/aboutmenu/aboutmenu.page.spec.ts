import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmenuPage } from './aboutmenu.page';

describe('AboutmenuPage', () => {
  let component: AboutmenuPage;
  let fixture: ComponentFixture<AboutmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
