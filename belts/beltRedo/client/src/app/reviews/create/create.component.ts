import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FoodService } from '../../food.service';
import { Food } from '../../food';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  foods: any = [];
  food: any = [];
  errors: string[];
  reviews: any = [];

  constructor(private _foodService: FoodService, private _router: Router) { }

  ngOnInit() {
    this.food = this._foodService.food
    console.log(this.food)
    this.errors = [];
  }

  createReview(food, e): void {
    e.preventDefault();
    let observable = this._foodService.createReview(food);
    observable.subscribe(
      // Callback
      (food) => {
        console.log(food);
        this._router.navigate(['food'])
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }

}
