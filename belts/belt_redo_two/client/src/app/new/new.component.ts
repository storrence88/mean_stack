import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies'
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  movies: Movies;
  errors: any = [];

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit(){
    this.movies = new Movies();
  }

  createMovie(thisMovie, e): void {
    e.preventDefault();
    let observable = this._moviesService.createMovie(thisMovie);
    observable.subscribe(
      // Callback
      (food) => {
        console.log(food);
        this._router.navigate(['/home'])
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }

}
