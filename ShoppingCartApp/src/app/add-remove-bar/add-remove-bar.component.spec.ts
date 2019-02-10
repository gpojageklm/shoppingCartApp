import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveBarComponent } from './add-remove-bar.component';

describe('AddRemoveBarComponent', () => {
  let component: AddRemoveBarComponent;
  let fixture: ComponentFixture<AddRemoveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
