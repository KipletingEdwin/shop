import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomemainPage } from './homemain.page';

describe('HomemainPage', () => {
  let component: HomemainPage;
  let fixture: ComponentFixture<HomemainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
