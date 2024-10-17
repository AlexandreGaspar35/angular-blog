import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'content', component: ContentComponent}
];


