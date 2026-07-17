import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule, JsonPipe],

  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  success = '';
  productForm: FormGroup;

  registerForm: FormGroup;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      category: [''],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get author() {
    return this.productForm.get('author');
  }
  get category() {
    return this.productForm.get('category');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get loginUsername() {
    return this.loginForm.get('username');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  submitProduct() {
    console.log(this.productForm.value);
    this.http
      .post(`http://localhost:3000/stories`, this.productForm.value)
      .subscribe({
        next: () => {
          this.success = 'thêm truyện thành công';
          this.productForm.reset();
        },
      });
  }

  submitRegister() {
    console.log(this.registerForm.value);
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
}