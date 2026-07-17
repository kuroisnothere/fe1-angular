import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'stories', component: Stories },

  // Buổi 4
  { path: 'add-story', component: AddStory },
];