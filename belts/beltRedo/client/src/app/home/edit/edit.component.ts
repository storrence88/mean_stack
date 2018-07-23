import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FoodService } from '../../food.service';
import { Food } from '../../food';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  thisFood: Food;
  errors: string[];
  food: any;

  constructor(private _foodService: FoodService, private _router: Router) {
    this.thisFood = new Food();
  }

  ngOnInit() {
    this.thisFood = this._foodService.food
    console.log(this.thisFood)
    this.errors = [];
  }

  editFood(thisFood, e): void {
    e.preventDefault();
    // this._petsService.pet = thisPet;
    // console.log(this._petsService.pet)
    let observable = this._foodService.updateFood(this.thisFood);
    observable.subscribe(
      // Callback
      (food) => {
        console.log(food);
        this._router.navigate(['/food'])
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }

}
