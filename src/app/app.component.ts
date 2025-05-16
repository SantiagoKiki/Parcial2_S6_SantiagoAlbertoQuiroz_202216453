import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { VuelosListComponent } from '../vuelos-list/vuelos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VuelosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial2';
}
