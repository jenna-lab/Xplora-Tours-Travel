import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittourmodalComponent } from './edittourmodal.component';

describe('EdittourmodalComponent', () => {
  let component: EdittourmodalComponent;
  let fixture: ComponentFixture<EdittourmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittourmodalComponent]
    });
    fixture = TestBed.createComponent(EdittourmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
