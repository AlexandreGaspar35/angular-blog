import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { BigCardComponent } from './component/big-card/big-card.component';
import { SmallCardComponent } from './component/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuBarComponent,MenuTitleComponent,BigCardComponent,SmallCardComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proj';
}
