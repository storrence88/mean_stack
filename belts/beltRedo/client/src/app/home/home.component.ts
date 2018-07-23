import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: any = [];
  food: any = [];
  thisFood: any;

  constructor(private _foodService: FoodService, private _router: Router){ }

  ngOnInit(){
    this.getFoods();
  }

  getFoods() {
    let observable = this._foodService.getFoods();
    observable.subscribe((food) => {
      this.foods = food;
      console.log(`Here are all of the restaurants ${food}`);
    });
  }

  editFood(food, e) {
    this._foodService.food = food;
    console.log(this._foodService.food);
  }

  getReviews(reviews){
    this._foodService.reviews = reviews;
    console.log(this._foodService.reviews);
  }

  delete(food) {
    let observable = this._foodService.removeFood(food);
    observable.subscribe((food) => {
      this.food = food;
      this._router.navigate(['food']);
      console.log(`Successfully deleted the restaurant! ${this.food}`);
    });
  }

}
