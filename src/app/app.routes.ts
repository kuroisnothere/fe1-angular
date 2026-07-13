import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Stories } from "./pages/stories/stories";
import { AddStory } from "./pages/add-story/add-story";

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: About,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
  }
];
