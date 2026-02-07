import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsmainPage } from './projectsmain.page';

describe('ProjectsmainPage', () => {
  let component: ProjectsmainPage;
  let fixture: ComponentFixture<ProjectsmainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
