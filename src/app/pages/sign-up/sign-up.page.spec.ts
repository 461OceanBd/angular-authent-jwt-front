import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage } from './sign-up.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPage],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
