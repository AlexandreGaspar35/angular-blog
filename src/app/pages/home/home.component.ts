import { Component } from '@angular/core';
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../component/menu-title/menu-title.component';
import { BigCardComponent } from '../../component/big-card/big-card.component';
import { SmallCardComponent } from '../../component/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
