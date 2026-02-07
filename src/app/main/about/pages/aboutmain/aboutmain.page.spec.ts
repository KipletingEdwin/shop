import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmainPage } from './aboutmain.page';

describe('AboutmainPage', () => {
  let component: AboutmainPage;
  let fixture: ComponentFixture<AboutmainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
