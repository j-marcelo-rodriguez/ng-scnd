import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURL: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    search( term: string ): Observable<Country[]> {

        switch ( term ) {
            case :
                
                break;
        
            default:
                break;
        }

    }

    searchCapital( term: string ): Observable<Country[]>{
        const url = `${ this.apiURL }/capital/${ term }`;
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of([]))
            );
    }


    searchCountry( term: string ): Observable<Country[]> {
        const url = `${ this.apiURL }/name/${ term }`
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of([]) )
            );
    }

    searchRegion( term: string ): Observable<Country[]> {
        const url = `${ this.apiURL }/region/${ term }`
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => of([]) )
            );
    }
    
}