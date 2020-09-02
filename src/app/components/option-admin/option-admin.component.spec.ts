import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionAdminComponent } from './option-admin.component';

describe('OptionAdminComponent', () => {
  let component: OptionAdminComponent;
  let fixture: ComponentFixture<OptionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
