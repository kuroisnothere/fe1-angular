import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  // Bài 1
  productForm: FormGroup;

  // Bài 2
  registerForm: FormGroup;

  // Bài 3
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Bài 1
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.min(1)],
      category: [''],
    });

    // Bài 2
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Bài 3
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Product
  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  // Register
  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  // Login
  get loginUsername() {
    return this.loginForm.get('username');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  submitProduct() {
    console.log(this.productForm.value);
  }

  submitRegister() {
    console.log(this.registerForm.value);
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
}