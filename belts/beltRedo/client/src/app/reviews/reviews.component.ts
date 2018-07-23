import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  foods: any = [];
  food: any = [];
  errors: string[];
  reviews: any = [];

  constructor(private _foodService: FoodService, private _router: Router) { }

  ngOnInit() {
    this.food = this._foodService.reviews
    console.log(this.food)
    this.errors = [];
  }

  sendId(food){
    this._foodService.food = food;
    console.log(this._foodService.food);
  }

}
