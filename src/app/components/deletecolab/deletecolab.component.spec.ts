import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecolabComponent } from './deletecolab.component';

describe('DeletecolabComponent', () => {
  let component: DeletecolabComponent;
  let fixture: ComponentFixture<DeletecolabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecolabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
