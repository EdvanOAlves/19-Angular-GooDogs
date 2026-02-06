import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Para declarar esse recurso, vai existir apenas uma instância no root que pode ser acessada em outros lugares
@Injectable({
  providedIn: 'root',
})

export class DogSearchService {
  //Utilizando de private pois só será necessário ensse recurso
  constructor(private http: HttpClient){}

  searchByBreed(breed: string): Observable<any>{
    const url = `https://dog.ceo/api/breed/${breed}/images`
    return this.http.get<any>(url)
  }
  
}
