import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomemenuPage } from './homemenu.page';

describe('HomemenuPage', () => {
  let component: HomemenuPage;
  let fixture: ComponentFixture<HomemenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
