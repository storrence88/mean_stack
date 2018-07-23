import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FoodService } from '../../food.service';
import { Food } from '../../food';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  food: Food;
  errors: string[];

  constructor(
    private _foodService: FoodService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.food = new Food();
    this.errors = [];
  }

  createFood(e): void {
    e.preventDefault();
    let observable = this._foodService.createFood(this.food);
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
