import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_PATTERN } from 'src/app/utils/validation-patterns';
import { matchPasswordValidator } from 'src/app/utils/validators/match-password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

  submitted = false;
  signUpForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.pattern(PASSWORD_PATTERN)]),
    repassword: this.fb.control('', [Validators.required, matchPasswordValidator('password')]),
   }, {updateOn: 'submit'});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.signUpForm.valid) {

    }

  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get repassword() { return this.signUpForm.get('repassword'); }

}
