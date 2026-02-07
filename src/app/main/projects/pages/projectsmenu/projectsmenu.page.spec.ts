import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsmenuPage } from './projectsmenu.page';

describe('ProjectsmenuPage', () => {
  let component: ProjectsmenuPage;
  let fixture: ComponentFixture<ProjectsmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
