import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  registerUrl: string = "/register";
  response;
  loginFailedText = "";

  constructor(private router: Router, private formBuilder: FormBuilder, private cartService: CartService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginAndNavigate();
  }

  loginAndNavigate() {
    let userName = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;

    this.cartService.login(
      this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
      response => {
        this.response = response;
        if (this.response.length > 0) {
           this.loginFailedText = "";
          this.router.navigate(['/productContainer']);
        }
        else {
         this.loginFailedText="Login Failed";
        }
      },
      err => {
       this.loginFailedText="Login Failed";
      });
  }

}
