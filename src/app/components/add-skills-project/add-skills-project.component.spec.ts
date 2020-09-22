import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsProjectComponent } from './add-skills-project.component';

describe('AddSkillsProjectComponent', () => {
  let component: AddSkillsProjectComponent;
  let fixture: ComponentFixture<AddSkillsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
