import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { StoryService } from './story.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-story',
  imports: [ReactiveFormsModule],
  templateUrl: './story.html',
  styleUrl: './story.css',
})
export class Story {
  storyForm: FormGroup;
  productForm: FormGroup;

  success = '';
  error = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
    private productService: ProductService,
  ) {
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0],
    });

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
    });
  }

  submitStory() {
    if (this.storyForm.invalid) {
      this.storyForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.storyService.create(this.storyForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';

        this.storyForm.reset({
          title: '',
          author: '',
          views: 0,
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }

  submitProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.productService.create(this.productForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm sản phẩm thành công';

        this.productForm.reset({
          name: '',
          price: 0,
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}