/* tslint:disable:no-unused-variable */

import { TestBed} from '@angular/core/testing';
import { VuelosServicesService } from './vuelos-services.service';


describe('VuelosServices', () => {
  let service: VuelosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuelosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

