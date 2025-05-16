import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vuelo } from './models/vuelo.model';



@Injectable({  providedIn: 'root' 
})
export class VuelosServicesService {

  private apiUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

  constructor(private http: HttpClient) { }

  getVuelos(): Observable<Vuelo[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(series => series.map(serie => ({
        ...serie,
        poster: `assets/images/${serie.id}-${serie.name.toLowerCase().replace(/ /g, '-')}.jpg`
      }))
    ));
  } 
}


