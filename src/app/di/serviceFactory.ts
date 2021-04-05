import { DiMockService } from './di-mock.service';
import { DiPrimeService } from './di-prime.service';

// miejsce, w którym określamy, który serwis ma zostać wstrzyknięty w zależności od tego, jaki numer ustawimy w pliku serviceCalc
export function serviceFactory(service: number): object { 
    switch(service) {
        case 1:
        return new DiPrimeService();
        case 2:
        return new DiMockService();
        default: 
        return new DiPrimeService();

    }
}

