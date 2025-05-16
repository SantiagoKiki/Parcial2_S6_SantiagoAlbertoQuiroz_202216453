import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Aerolinea } from './models/aerolinea.model';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

constructor(private http: HttpClient) { }

  private apiUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

  getAerolinea(): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea>(this.apiUrl).pipe(
      map(aerolinea => aerolinea.map((aerolinea: { name: string; }) => ({
        ...aerolinea,
        poster: `assets/images/${aerolinea.name}-${aerolinea.name.toLowerCase().replace(/ /g, '-')}.jpg`
      }))
    ));
  } 
}
function Injectable(arg0: { providedIn: string; }): (target: typeof AerolineaService) => void | typeof AerolineaService {
  throw new Error('Function not implemented.');
}

