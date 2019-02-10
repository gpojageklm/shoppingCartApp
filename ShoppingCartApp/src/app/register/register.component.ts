import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registrationStatusText = "";

  constructor(private fb: FormBuilder, private cartService: CartService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.cartService.register(this.registerForm.value).subscribe(response => {
      this.registrationStatusText = "Registered Successfully !";
    },
      error => {
        this.registrationStatusText = "Registration failed!";
      });
  }

}
