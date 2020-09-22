import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColabProjectComponent } from './add-colab-project.component';

describe('AddColabProjectComponent', () => {
  let component: AddColabProjectComponent;
  let fixture: ComponentFixture<AddColabProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColabProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColabProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
