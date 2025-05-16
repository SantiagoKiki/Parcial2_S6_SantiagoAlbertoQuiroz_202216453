import { Component, OnInit } from '@angular/core';
import { VuelosServicesService } from '../vuelos-services.service';
import { Vuelo } from '../models/vuelo.model'; // Adjust the path if your Vuelos interface/type is elsewhere

@Component({
  selector: 'app-vuelos-list',
  templateUrl: './vuelos-list.component.html',
  styleUrls: ['./vuelos-list.component.css']
})
export class VuelosListComponent implements OnInit {
  vuelos: Vuelo[] = []; 

  constructor(private vueloService: VuelosServicesService) {}

  ngOnInit(): void {
    this.vueloService.getVuelos().subscribe({
      next: (data) => {
        this.vuelos = data;
        
      },
      error: (err) => console.error('Error:', err)
    });
  }

}
