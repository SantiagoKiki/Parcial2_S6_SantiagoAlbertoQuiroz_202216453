
export class Aerolinea {
    constructor(
        public id: number,
        public departureAirport: string,
        public departureCountry: string,
        public departureCity: string,
        public arrivalAirport: string,
        public arrivalCountry: string,
        public arrivalCity: string,
        public departureTime: string,
        public flightDuration: number,
        public image: string,
    ) {}
  }

   
