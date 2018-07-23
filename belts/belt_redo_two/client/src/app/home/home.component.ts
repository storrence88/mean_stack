import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(
    private _moviesService: MoviesService, 
    private _router: Router
    ) {}

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    let observable = this._moviesService.getMovies();
    observable.subscribe((movies) =>{
      this.movies = movies;
      console.log(`Here are all of the movies ${this.movies}`);
    });
  }

}
