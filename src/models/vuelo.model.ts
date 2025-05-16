export class Vuelo {
    constructor(
        public id: number,
        public airlineName: string,
        public country: string,
        public city: string,
        public address: string,
        public identityColor: string,
        public slogan: string,
        public flights: Array<any>
    ) {}
  }