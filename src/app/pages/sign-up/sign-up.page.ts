import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.signUpForm.valid) {
      const user = new User(this.email?.value, this.password?.value);
      this.authService.createUser(user).pipe(
        switchMap((createdUser: User) =>{
          if (!!createdUser) {
            this.router.navigateByUrl('autre'); // TODO: affichage dashboard selon profile
            this.toast.showSuccess('Profil créé avec succès', 'Well done !')
          }
          return of(createdUser);
        }),
        catchError((err) => {
          const toastTitle  = 'Erreur ' + err.status;
          const toastMessage = err.error;
          this.toast.showError(toastMessage, toastTitle);
          return of(null);
        })
      ).subscribe();

    }

  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get repassword() { return this.signUpForm.get('repassword'); }

}
