import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_PATTERN } from 'src/app/utils/validation-patterns';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

   signUpForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.pattern(PASSWORD_PATTERN)]),
    repassword: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.pattern(PASSWORD_PATTERN)]),
   });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  public onSubmit(): void {

  }

}
