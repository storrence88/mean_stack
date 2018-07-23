import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient){}

  getMovies(){
    return this._http.get('/movies');
  }

  createMovie(thisMovie){
    return this._http.post('/movies', thisMovie);
  }
}
