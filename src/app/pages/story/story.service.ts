import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StoryForm {
  title: string;
  author: string;
  views: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private api = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  create(data: StoryForm) {
    return this.http.post(this.api, data);
  }
}