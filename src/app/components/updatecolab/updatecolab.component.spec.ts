import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecolabComponent } from './updatecolab.component';

describe('UpdatecolabComponent', () => {
  let component: UpdatecolabComponent;
  let fixture: ComponentFixture<UpdatecolabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecolabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
